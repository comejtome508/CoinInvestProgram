import React, {useState, useEffect} from 'react'
import { Table } from 'antd';
import { useGetOrderList } from '../../queries/upbitQueries';


const TradingTable = () => {
    const dataSource = [
        {
          key: '1',
          name: 'Mike',
          age: 32,
          address: '10 Downing Street',
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
      ];
      
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
      ];
      const { isLoading, data, isError, error, isFetching} = useGetOrderList();
   
      useEffect(() => {}, [])

      console.log("data in table : ", data)

  return (
    <>
    <Table dataSource={dataSource} columns={columns} />
    </>
    
  )
}

export default TradingTable