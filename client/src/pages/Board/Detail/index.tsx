import React from 'react'
import {useNavigate} from "react-router";
import {Button, Layout, PageHeader} from "antd";
import BoardContentHeader from "../../../components/board/BoardContentHeader";

const { Content } = Layout;

const Index = () => {
    return(
        <div className="site-page-header-ghost-wrapper">
            <BoardContentHeader navigateTo={'/shareBoard'} menuType={'detail'} />
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