const express = require('express');
//암호화 해주는 라이브러리
const bcrypt = require('bcrypt');
const { User } = require('../models');
const { nextTick } = require('process');

const router = express.Router();

// 권한 인증 전략 실행
// 미들웨어 확장 스타일
router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            console.error(err);
            return next(err);
        }
        if (info) {
            return res.status(401).send(info.reason);
        }
        return req.login(user, async (loginErr) => {
            if (loginErr) {
                console.err(loginErr);
                return next(loginErr);
            }
            return res.status(200).json(user);
        })
    })(req, res, next);
});

router.post('/', async (req, res, next) => {
    try{
        const exUser = await User.findOne({
            where: {
                email: req.body.email,
            }
        });
        if (exUser) {
            return res.status(403).send('이미 사용중인 아이디입니다.');
        }
        //숫자는 암호화해주는 단계, 높을수록 계산이 오래걸림
        const hashedPassword = await bcrypt.hash(req.body.password, 12);
        await User.create({
            email: req.body.email,
            nickname: req.body.nickname,
            password: hashedPassword,
        });
        res.status(200).send('요청 처리 성공');
    } catch (error) {
        console.error(error);
        //next로 에러를 보내면 한방에 처리함
        next(error); //status 500
    }

});

router.post('/user/logout', (req, res, next) => {
    req.logout();
    req.session.destroy();
    req.send('logout success');
})

module.exports = router;