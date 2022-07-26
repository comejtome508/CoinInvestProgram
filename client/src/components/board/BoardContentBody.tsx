import React from 'react';
import { Layout } from "antd";

type BodyProps = {
    content: string,
}

const { Content } = Layout;

const BoardContentBody = ({ content }: BodyProps) => {

    return(
        <div>
            <Content
                className="site-layout-background"
                style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 500,
                    backgroundColor: 'white'
                }}
            >
                {content}
            </Content>
        </div>
    )
}

export default BoardContentBody;