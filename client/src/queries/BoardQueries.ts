import {useMutation, useQuery} from "react-query";
import {BoardService} from "../services/BoardService";
import {boardKeys} from "./QueryKeys";
import {IBoardParam} from "../typing/Board";


export const useGetAllBoardList = () => {
    return useQuery(
        boardKeys.list(),
        () => BoardService.getAllBoardLists(),
        {
            enabled: false,
            onError: (error) => {

            },
            onSuccess: (data) => {
                console.log("=================게시판 호출 성공====================");
                console.log("data : ", data);
            },
        }
    )
};

export const useGetBoardItemWIthId = (param:any) => {
    return useQuery(
        boardKeys.listItem(),
        () => BoardService.getBoardItemWithId(param),
        {
            enabled: false,
            onError: (error) => {

            },
            onSuccess: (data) => {
                console.log("=================게시판 등록 성공====================");
                console.log("data : ", data);
            },
        }
    )
};

export const useCreateBoardItem = (createBoardParam: IBoardParam) => {
    return useMutation(
        boardKeys.create(),
        () => BoardService.createBoardItem(createBoardParam),
        {
            onError: (error, variables, context) => {
                console.log("=================게시판 등록 실패====================");

            },
            onSuccess: (data, variables, context) => {
                console.log("=================게시판 등록 성공====================");
            },
        }
    )
}