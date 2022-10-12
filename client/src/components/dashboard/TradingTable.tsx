import React, {useState, useEffect} from 'react'
import { Table } from 'antd';
import { useGetOrderList } from 'queries/UpbitQueries';
import _ from 'lodash';
import {OrderInfo, Trading} from 'typing/Dashboard';
import list from "../../pages/Board/List";
import dayjs from "dayjs";

interface TableType {
    key: string,
    side: string,
    price: string,
    created_at : string,
    executed_volume : string,
    paid_fee : string
}

const TradingTable = () => {
    const [tableItem, setTableItem] = useState<TableType>(
        {
            key: '',
            side: '',
            price: '',
            created_at : '',
            executed_volume : '',
            paid_fee : ''
        }
    );
    const [listDataSource,setListDataSource] = useState<TableType[]>([]);

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
        makeListData(data);
    }, [data]);

    const makeListData = (data:OrderInfo[]) => {
        const copiedData = _.cloneDeep(data);
        let tempList:TableType[] = [];
        let tempData:Trading = {
            key: '',
            side: '',
            price: '',
            created_at: '',
            executed_volume: '',
            paid_fee: ''
        };
        copiedData?.map((listItem: OrderInfo, key:number)=>{
                tempList.push({
                        key: key.toString(),
                        side: listItem.side,
                        price: Number(listItem.price).toLocaleString('ko-KR') + '원',
                        created_at : dayjs(listItem.created_at).format('YYYY.MM.DD HH:MM'),
                        executed_volume : listItem.executed_volume,
                        paid_fee : listItem.paid_fee
                    });
        })
        setListDataSource(tempList);
    };

    return (
        <>
            <Table dataSource={listDataSource} columns={columns} />
        </>

    )
}

export default TradingTable;