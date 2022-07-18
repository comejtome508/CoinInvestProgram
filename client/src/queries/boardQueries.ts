import axios from "axios";
import {useMutation} from "react-query";

const getAllBoardsApi = (param:any) => {
    return axios.get('/boards');
}

export const useGetAllBoards = () => {
    return useMutation(getAllBoardsApi, {
        onSuccess: () => {

        }
    })
}