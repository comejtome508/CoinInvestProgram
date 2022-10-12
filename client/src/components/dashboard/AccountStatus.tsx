import React from 'react';
import { useGetAccounts } from 'queries/UpbitQueries';
import {Account, Currency} from "../../typing/Dashboard";

const AccountStatus = () => {
    const { isLoading:isAccountsLoading, data: accountsData, isError, error, isFetching} = useGetAccounts();
    const holdingCash:string|undefined = accountsData?.find(item => item.currency === Currency.KRW)?.balance;
    console.log("account data in real chart : ", accountsData)
    return (
        <>
            {
                isAccountsLoading ? <div>로딩중</div>
                    : (accountsData &&
                        <>
                        <h1>내 계좌 현황</h1>
                        <div>
                            <strong>현금 : </strong><span>{Math.floor(Number(holdingCash)).toLocaleString('ko-KR')}원</span>
                        </div>
                        <div>
                            <strong>보유코인</strong>
                            <ul>
                                {accountsData.filter(coin => coin.currency !== Currency.KRW).map((coin: Account, i:number)=>{
                                    return(<li key={i}>{coin.currency} : {coin.balance}</li>)
                                })}
                            </ul>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                    </>)
            }

        </>
    )
}

export default AccountStatus;