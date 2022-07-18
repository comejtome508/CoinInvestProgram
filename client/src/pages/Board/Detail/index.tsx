import React from 'react'
import {useNavigate} from "react-router";
import {Button, Layout, PageHeader} from "antd";

const { Content } = Layout;

const Index = () => {
    const navigate = useNavigate();

    return(
        <div className="site-page-header-ghost-wrapper">
            <PageHeader
                ghost={false}
                onBack={() => navigate('/shareBoard')}
                title="Title"
                subTitle="This is a subtitle"
                extra={[
                    <Button key="1" type="primary">
                        수정하기
                    </Button>,
                ]}
            >
            </PageHeader>
            <Content
                className="site-layout-background"
                style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 500,
                    backgroundColor: 'white'
                }}
            >
                Content
            </Content>


        </div>
    )
}

export default Index;