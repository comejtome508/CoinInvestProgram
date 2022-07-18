import { DataSource, Repository } from 'typeorm';
import { Board } from './board.entity';
import { BoardStatus } from './board.model';
import { CreateBoardDto } from './dto/create-board.dto';
import { Injectable, NotFoundException } from '@nestjs/common';

// @EntityRepository(Board)
@Injectable()
export class BoardRepository extends Repository<Board> {
  constructor(private readonly dataSource: DataSource) {
    super(
      Board,
      dataSource.createEntityManager(),
      dataSource.createQueryRunner(),
    );
  }
  async getBoardById(id: number): Promise<Board> {
    const found = await this.findOneBy({ id });

    if (!found) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }

    return found;
  }

  async getAllBoards(): Promise<Board[]> {
    return await this.find();
  }

  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    const { title, description } = createBoardDto;

    const board = this.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
    });

    await this.save(board);
    return board;
  }

  async deleteBoard(id: number): Promise<void> {
    const result = await this.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Can't find board with id ${id}`);
    }
  }

  async updateBoardStatus(id: number, status: BoardStatus): Promise<Board> {
    const board = await this.getBoardById(id);

    board.status = status;
    await this.save(board);

    return board;
  }
}
