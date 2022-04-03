import React from 'react'
import PostCard from 'components/PostCard'

const initialState = {
    mainPosts : [{
        id: 1, 
        User: {
            id: 1,
            nickname: '홍길동',
        },
        content: '첫 번째 게시글 #해시태그 #익스프레스',
        Images: [{
            src: ''
        }],
        Comments: [{
            User: {
                nickname: '둘리',
            },
            content: '댓글 테스트합니다.'
        },{
            User: {
                nickname: '뽀로로',
            },
            content: '댓글 테스트합니다2.'
        }]
    }],
    imagePaths:[],
    postAdded:false,
}
function index() {
  return (
    <>
        <PostCard />
    </>
  )
}

export default index