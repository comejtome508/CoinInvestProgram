import React from 'react'
import BoardContentHeader from "../../../components/board/BoardContentHeader";
import BoardContentBody from "../../../components/board/BoardContentBody";
import {useGetBoardItemWIthId} from "../../../queries/BoardQueries";
import {useParams} from "react-router";



const Index = () => {
    const { id } = useParams<{ id: string }>();

    const {data} = useGetBoardItemWIthId({id: id});

    return(
        <div className="site-page-header-ghost-wrapper">
            {data &&
                <>
                    <BoardContentHeader navigateTo={'/shareBoard'} title={data?.data.title} menuType={'detail'} />
                    <BoardContentBody content={data?.data.description}/>
                </>}
        </div>
    )
}

export default Index;