import { useQuery } from 'react-query';
import {UpbitService} from "../services/UpbitService";
import {upbitKeys} from "./QueryKeys";

export const useGetAccounts = () => {
    // const onSuccess = (result:any) => {
    //     console.log('==========호출성공==========',result);
    // }
    //
    // const onError = (error:any) => {
    //     console.error('==========호출실패==========',error);
    // }
    //
    // return useQuery('accounts', getAccountsApi, {
    //     onSuccess,
    //     onError,
    //     select: (data) => {
    //         const accountData = data.data;
    //         return accountData;
    //     },
    // })
    return useQuery(
        upbitKeys.allAccounts(),
        () => UpbitService.getAllAccounts(),
        {
            onError: (error) => {
                console.log("=================계좌 호출 실패====================");
            },
            onSuccess: (data) => {
                console.log("=================계좌 호출 성공====================");
                console.log("data : ", data);
            },
        }
    );
};


export const useGetAllMarketCode = () => {
    // const onSuccess = (data:any) => {
    //     console.log('==========호출성공==========',data);
    // }
    //
    // const onError = (error:any) => {
    //     console.log('==========호출실패==========',error);
    // }
    //
    // return useQuery('allMarkets', upbitApi, {
    //     onSuccess,
    //     onError,
    //     select: (data) => {
    //         console.log(data.data);
    //         return data;
    //     }
    // })
    return useQuery(
        upbitKeys.allMarketInfo(),
        () => UpbitService.getAllMarketInfo(),
        {
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
    // const onSuccess = (data:any) => {
    //     console.log('==========호출성공==========',data);
    // }
    //
    // const onError = (error:any) => {
    //     console.log('==========호출실패==========',error);
    // }
    //
    // return useQuery('orderLists', getOrderListApi, {
    //     onSuccess,
    //     onError,
    //     select: (data) => {
    //         console.log(data.data);
    //         return data;
    //     }
    // })
    return useQuery(
        upbitKeys.orderLists(),
        // () => UpbitService.getOrderLists(),
        {
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

