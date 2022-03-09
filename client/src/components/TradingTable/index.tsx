import React, {useState, useEffect} from 'react'
import { Table } from 'antd';
import axios from 'axios';

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

   
      useEffect(() => {

        //Upbit API
        const getApi = async() =>{
            await axios.get('https://api.upbit.com/v1/market/all').then((res) =>{
            console.log(res.data)
            })
            
        }
        getApi();
    }, [])

  return (
    <Table dataSource={dataSource} columns={columns} />
  )
}

export default TradingTable