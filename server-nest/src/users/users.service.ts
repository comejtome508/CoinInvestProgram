import { Injectable } from '@nestjs/common';
import { EmailService } from 'src/email/email.service';
import * as uuid from 'uuid';

@Injectable()
export class UsersService {
    constructor(private emailService: EmailService) {}
    async createUser(name: string, email: string, password: string) {
        await this.checkUserExists(email);

        const signupVerifyToken = uuid.v1();

        await this.saveUser(name, email, password, signupVerifyToken);
        await this.sendMemberJoinEmail(email, signupVerifyToken);
    }


    async verifyEmail(signupVerifyToken: string): Promise<string> {
        // TODO
      // 1. DB에서 signupVerifyToken으로 회원 가입 처리중인 유저가 있는지 조회하고 없다면 에러 처리
      // 2. 바로 로그인 상태가 되도록 JWT를 발급
      throw new Error('Method not implemented.');
    }

    private checkUserExists(email: string) {
        return false;
    }

    private saveUser(name: string, email: string, password: string, signupVerifyToken: string) {
        return;
    }

    private async sendMemberJoinEmail(email:string, signupVerifyToken:string){
        await this.emailService.sendMemberJoinVerification(email, signupVerifyToken);
    }
}
