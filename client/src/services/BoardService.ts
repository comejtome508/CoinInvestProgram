import {instance} from "../hooks/useAxiosLoader";
import {IBoardParam} from "../typing/Board";


const API_URL = '/api/boards';

export const BoardService = {
    getAllBoardLists: async () => {
        const data = await instance.get(`${API_URL}`,{});
        return data;
    },

    getBoardItemWithId: async (param: any) => {
        const data = await instance.get(`${API_URL}/${param.id}`, {});
        return data;
    },

    createBoardItem: async (param: IBoardParam) => {
        const result = await instance.post(`${API_URL}`, param);

        return result;
    },

    deleteBoardItem: async (id:string) => {
        const result = await instance.delete(`${API_URL}/${id}`);

        return result;
    }
}