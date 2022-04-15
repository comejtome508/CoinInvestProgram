import React from 'react'
import { Card, Col, Row, Pagination,PageHeader, Button } from 'antd';

function PostCard() {
  return (
    <div className="site-card-wrapper">
          <PageHeader
                className="site-page-header"
                // onBack={() => null}
                title="정보 공유 및 토론"
                // subTitle="This is a subtitle"
                extra={[
                    <Button key="1">글쓰기</Button>
                ]}
            />
        <Row gutter={[8,8]}>
            <Col span={12}>
                <Card title="Card title" bordered={true} onClick={()=>{console.log("click")}}>
                Card content
                </Card>
            </Col>
            <Col span={12}>
                <Card title="Card title" bordered={false}>
                Card content
                </Card>
            </Col>
        </Row>
    {/* <Pagination size="small" total={50} /> */}
    </div>
  )
};
export default PostCard;