import React from 'react';
import { useGetAccounts, useGetAllMarketCode } from 'queries/UpbitQueries';

const AccountStatus = () => {

    const { isLoading:isAccountsLoading, data:accountsData, isError, error, isFetching} = useGetAccounts();
    console.log("account data in real chart : ", accountsData)
    return (
        <>
            {
                isAccountsLoading ? <div>로딩중</div>
                    : (accountsData &&
                        <>
                        <h1>내 계좌 현황</h1>
                        <div>
                            {/*<strong>현금 : </strong><span>{Math.floor(accountsData[0].balance).toLocaleString('ko-KR')}원</span>*/}
                        </div>
                        <div>
                            <strong>보유코인</strong>
                            <ul>
                                {/*{accountsData.map((coin:any, i:number)=>{*/}
                                {/*    return( i > 0 && <li key={i}>{coin.currency} : {coin.balance}</li>)*/}
                                {/*})}*/}
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