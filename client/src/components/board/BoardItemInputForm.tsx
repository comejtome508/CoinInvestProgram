import React, {useCallback, useEffect} from 'react';
import { Button, Form, Input } from 'antd';
import useInput from "../../hooks/useInput";
import TextArea from "antd/lib/input/TextArea";
import {useCreateBoardItem} from "../../queries/BoardQueries";
import {useNavigate} from "react-router";

const layout = {
    labelCol: { span: 3 },
    wrapperCol: { span: 20},
};

const BoardItemInputForm = () => {
    const navigate = useNavigate();
    const { mutate: submitContentData, isSuccess:createContentSuccess, isError:createContentFail } = useCreateBoardItem()
    const [title, onChangeTitle] = useInput('');
    const [content, onChangeContent] = useInput('');

    const onSubmit = useCallback(() => {
        submitContentData({
            title: title,
            description: content
        })
    }, [title, content]);

    useEffect(() => {
        if(createContentSuccess){
            navigate('/shareBoard')
        }
        if(createContentFail) {
            alert("등록을 실패했습니다.")
        }
    }, [createContentSuccess, createContentFail])

    return (
        <Form onFinish={onSubmit}>
            <div>
                <label htmlFor={'title'}>제목</label>
                <br />
                <Input name={"title"} type={'text'} value={title} onChange={onChangeTitle}></Input>
            </div>
            <div>
                <label htmlFor={'content'}>내용</label>
                <br />
                <TextArea name={"content"} value={content} onChange={onChangeContent}></TextArea>
            </div>
            <div style={{ marginTop: 10 }}>
                <Button type="primary" htmlType='submit'>등록하기</Button>
            </div>
        </Form>
    )
}

export default BoardItemInputForm;