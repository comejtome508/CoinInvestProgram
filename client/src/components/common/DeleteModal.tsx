import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';
import React, {useState} from 'react';

const { confirm } = Modal;

const showDeleteConfirm = (callback:any) => {
    confirm({
        title: '정말 삭제하시겠습니까?',
        icon: <ExclamationCircleOutlined />,
        // content: '한번 삭제하면 되돌리지 못합니다.',
        okText: '삭제',
        okType: 'danger',
        cancelText: '취소',
        onOk() {
            callback();
        },
        onCancel() {
            return
        },
    });
};


const DeleteModal = ( props:any ) => {
    const { callback } = props;
    return(
        <Space wrap>
            <Button onClick={() => showDeleteConfirm(callback)} danger type="text">
                삭제
            </Button>
        </Space>
    );
};

export default DeleteModal;