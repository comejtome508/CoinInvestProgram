import React from 'react';
import BoardContentHeader from "../../../components/board/BoardContentHeader";
import BoardItemInputForm from "../../../components/board/BoardItemInputForm";

const Index = () => {
    return(
        <div className="site-page-header-ghost-wrapper">
            <BoardContentHeader navigateTo={'/shareBoard'} title={'등록하기'} menuType={'create'} />
            <BoardItemInputForm />
        </div>
    )
}

export default Index;