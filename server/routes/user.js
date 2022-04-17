const express = require('express');
//암호화 해주는 라이브러리
const bcrypt = require('bcrypt');
const { User } = require('../models');
const { nextTick } = require('process');

const router = express.Router();

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
        res.status(200).send('ok');
    } catch (error) {
        console.error(error);
        //next로 에러를 보내면 한방에 처리함
        next(error); //status 500
    }

});

module.exports = router;