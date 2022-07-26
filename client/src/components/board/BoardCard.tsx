import React, {useEffect} from 'react'
import { Card, Col, Row, Pagination,PageHeader, Button } from 'antd';
import { useNavigate } from 'react-router';
import {useGetAllBoardList} from "../../queries/BoardQueries";
import {IBoardParam} from "../../typing/Board";

const BoardCard = () => {
const navigate = useNavigate();
const {isLoading:isLoadingListData, isError, data:allList, error } = useGetAllBoardList();

  return (
    <div className="site-card-wrapper">
          <PageHeader
                className="site-page-header"
                // onBack={() => null}
                title="정보 공유 및 토론"
                // subTitle="This is a subtitle"
                extra={[
                    <Button key="1" onClick={() => navigate('/createBoard/')}>글쓰기</Button>
                ]}
            />
    {allList?.data.length > 0 &&
        <Row gutter={[8, 8]}>
            <Col span={12}>
                {
                    allList?.data.map((listItem:IBoardParam,idx:number) => {
                        return (
                            <Card title={`${listItem.title}`} bordered={true} onClick={() => navigate('/boardDetail/' + listItem.id)}>
                                {listItem.description}
                            </Card>
                        )
                    })
                }
            </Col>
        </Row>
    }
    {/* <Pagination size="small" total={50} /> */}
    </div>
  )
};
export default BoardCard;