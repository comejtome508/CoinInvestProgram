import React from 'react';
import {useNavigate} from "react-router";
import {Button, PageHeader} from "antd";

type HeaderProps = {
    navigateTo: string,
    title?: string,
    menuType: 'create' | 'detail',
}

const BoardContentHeader = ({ navigateTo, title, menuType }: HeaderProps) => {
    const navigate = useNavigate();

    return(
        <div>
            <PageHeader
                ghost={false}
                onBack={() => navigate(navigateTo)}
                title={title}
                // subTitle="This is a subtitle"
                extra={[
                    <Button key="1" type="primary">
                        {menuType === 'detail' && '수정'}
                    </Button>,
                    <Button key="2" danger type="text">
                        {menuType === 'detail' && '삭제'}
                    </Button>,
                ]}
            >
            </PageHeader>
        </div>
    )
}
export default BoardContentHeader;