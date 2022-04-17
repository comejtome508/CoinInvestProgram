const express = require('express');
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const cors = require('cors');
const db = require('./models');
const app = express();

db.sequelize.sync()
    .then(() => {
        console.log('db 연결 성공');
    })
    .catch(console.error);
//cors 라이브러리로 처리
app.use(cors({
    //origin: '' -> 요청 링크 추가}
    origin: '*',
    credentials: false,

}));
// 프론트에서 받은 json 데이터를 서버 route 파일에서 req로 받을 수 있게 변환시켜줌
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/post', postRouter);
app.use('/posts', postsRouter);
app.use('/user', userRouter);

app.listen(3065, () => {
    console.log('서버 실행 중!');
})
