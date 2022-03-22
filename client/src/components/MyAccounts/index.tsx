import React from 'react'
import { useGetAccounts, useGetAllMarketCode } from '../../queries/upbitQueries';

const MyAccounts = () => {

    const { isLoading, data, isError, error, isFetching} = useGetAccounts();

    return (
        <>
            <h1>내 계좌 현황</h1>

        </>
    )
}

export default MyAccounts;