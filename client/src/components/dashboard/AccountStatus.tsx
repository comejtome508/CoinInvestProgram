import React from 'react';
import { useGetAccounts, useGetAllMarketCode } from 'queries/UpbitQueries';

const AccountStatus = () => {

    const { isLoading, data, isError, error, isFetching} = useGetAccounts();
    console.log("account data in real chart : ", data)
    return (
        <>
            {
                isLoading ? <div>로딩중</div>
                    :<>
                        <h1>내 계좌 현황</h1>
                        <div>
                            <strong>현금 : </strong><span>{Math.floor(data[0].balance).toLocaleString('ko-KR')}원</span>
                        </div>
                        <div>
                            <strong>보유코인</strong>
                            <ul>
                                {data.map((coin:any, i:number)=>{
                                    return( i > 0 && <li key={i}>{coin.currency} : {coin.balance}</li>)
                                })}
                            </ul>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                    </>
            }

        </>
    )
}

export default AccountStatus;