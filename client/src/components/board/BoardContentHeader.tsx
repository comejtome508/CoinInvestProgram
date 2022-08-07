import React, {useEffect} from 'react';
import {useNavigate} from "react-router";
import {Button, PageHeader} from "antd";
import DeleteModal from "../common/DeleteModal";
import {useDeleteBoardItem} from "../../queries/BoardQueries";

type HeaderProps = {
    navigateTo: string,
    title?: string,
    menuType: 'create' | 'detail',
    id?: string,
}

const BoardContentHeader = ({ navigateTo, title, menuType, id }: HeaderProps) => {
    const { mutate: deleteSelectedItem, isSuccess:deleteItemSuccess } = useDeleteBoardItem(id!);
    const navigate = useNavigate();

    useEffect(()=>{
        if(deleteItemSuccess){
            alert("게시물을 삭제했습니다.")
            navigate('/shareBoard');
        }
    }, [deleteItemSuccess]);

    const deleteSelectedBoard = () => {
        deleteSelectedItem(id!);
    }


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
                    menuType === 'detail' && <DeleteModal callback={deleteSelectedBoard} />
                ]}
            >
            </PageHeader>
        </div>
    )
}
export default BoardContentHeader;