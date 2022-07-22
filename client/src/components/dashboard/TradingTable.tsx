import React, {useState, useEffect} from 'react'
import { Table } from 'antd';
import { useGetOrderList } from 'queries/UpbitQueries';
import _ from 'lodash';
import { TradingList } from 'typing/TradingTable';


const TradingTable = () => {
    const dataSource:any = [
        // {
        //   key: '',
        //   side: '',
        //   price: '',
        //   created_at : '',
        //   executed_volume : '',
        //   paid_fee : ''
        // },
    ];

    const columns = [
        {
            title: '주문 종류',
            dataIndex: 'side',
            key: 'side',
        },
        {
            title: '주문시 가격',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: '주문 시간',
            dataIndex: 'created_at',
            key: 'created_at',
        },
        {
            title: '체결량',
            dataIndex: 'executed_volume',
            key: 'executed_volume',
        },
        {
            title: '수수료',
            dataIndex: 'paid_fee',
            key: 'paid_fee',
        },

    ];
    const { isLoading, data, isError, error, isFetching} = useGetOrderList();

    useEffect(()=>{
        makeListData();
    }, [data]);

    const makeListData = () => {
        const copiedData = _.cloneDeep(data?.data);
        let tempData:TradingList = {
            key: '',
            side: '',
            price: '',
            created_at: '',
            executed_volume: '',
            paid_fee: ''
        };
        copiedData?.map((listItem:any, key:number)=>{
            for (const item in listItem) {
                switch (item) {
                    case 'key':
                        tempData['key'] = copiedData?.key;
                        break;
                    case 'side':
                        tempData['side'] = copiedData?.side;
                        break;
                    case 'price':
                        tempData['price'] = copiedData?.price;
                        break;
                    case 'created_at':
                        tempData['created_at'] = copiedData?.created_at;
                        break;
                    case 'created_at':
                        tempData['created_at'] = copiedData?.created_at;
                        break;
                    case 'executed_volume':
                        tempData['executed_volume'] = copiedData?.executed_volume;
                        break;
                    case 'paid_fee':
                        tempData['paid_fee'] = copiedData?.paid_fee;
                        break;

                    default:
                        break;
                }
                console.log("tempData : ", tempData)
                dataSource.push(tempData)
            }
        })

        // {
        //   key: '',
        //   side: '',
        //   price: '',
        //   created_at : '',
        //   executed_volume : '',
        //   paid_fee : ''
        // },

    };

    console.log("data in table : ", data)

    return (
        <>
            <Table dataSource={dataSource} columns={columns} />
        </>

    )
}

export default TradingTable;