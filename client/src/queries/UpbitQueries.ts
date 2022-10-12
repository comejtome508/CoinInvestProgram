import { useQuery } from 'react-query';
import {UpbitService} from "../services/UpbitService";
import {upbitKeys} from "./QueryKeys";

export const useGetAccounts  = () => {
    return useQuery(
        upbitKeys.allAccounts(),
        () => UpbitService.getAllAccounts(),
        {
            refetchOnMount: true,
            onError: (error) => {
                console.log("=================계좌 호출 실패====================");
            },
            onSuccess: (data) => {
                console.log("=================계좌 호출 성공====================");
                console.log("data: ", data);
            }
        }
    );
};


export const useGetAllMarketCode = () => {
    return useQuery(
        upbitKeys.allMarketInfo(),
        () => UpbitService.getAllMarketInfo(),
        {
            refetchOnMount: true,
            onError: (error) => {
                console.log("=================마켓 현황 호출 실패====================");

            },
            onSuccess: (data) => {
                console.log("=================마켓 현황 호출 성공====================");
                console.log("data : ", data);
            },
        }
    );
};

export const useGetOrderList = () => {
    return useQuery(
        upbitKeys.orderLists(),
        () => UpbitService.getOrderLists(),
        {
            refetchOnMount: true,
            onError: (error) => {
                console.log("=================매수매도 리스트 호출 실패====================");

            },
            onSuccess: (data) => {
                console.log("=================매수매도 리스트 호출 성공====================");
                console.log("data : ", data);
            },
        }
    );
};

