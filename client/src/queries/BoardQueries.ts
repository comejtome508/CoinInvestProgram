import {useMutation, useQuery} from "react-query";
import {BoardService} from "../services/BoardService";
import {boardKeys} from "./QueryKeys";


export const useGetAllBoardList = () => {
    return useQuery(
        boardKeys.list(),
        () =>  BoardService.getAllBoardLists(),
        {
            // enabled: false,
            refetchOnMount: true,
            onError: (error) => {
                console.log("=================게시판 호출 실패====================");

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
        boardKeys.listItemDetail(),
        () => BoardService.getBoardItemWithId(param),
        {
            onError: (error) => {
                console.log("=================게시판 상세 데이터 호출 실패====================");

            },
            onSuccess: (data) => {
                console.log("=================게시판 상세 데이터 호출 성공====================");
                console.log("detail data : ", data);
            },
        }
    )
};

export const useCreateBoardItem = () => {
    return useMutation(
        boardKeys.createBoardItem(),
        BoardService.createBoardItem,
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

export const useDeleteBoardItem = (id:string) => {
    return useMutation(
        boardKeys.deleteBoardItem(),
        BoardService.deleteBoardItem,
        {
            onError: (error, variables, context) => {
                console.log("=================게시판 삭제 실패====================");

            },
            onSuccess: (data, variables, context) => {
                console.log("=================게시판 삭제 성공====================");
            },
        }
    )
}