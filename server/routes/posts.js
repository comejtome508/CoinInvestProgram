const express = require('express');

const { Post, User, Image, Comment } = require('../models');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const posts = await Post.findAll({
            //게시글을 10개만 가지고 오도록 함
            where: { id: lastId },
            limit: 10,
            order: [['createdAt', 'DESC']],
            include: [{
                model: User,
                attributes: ['id', 'nickname'],
            }, {
                model: Image,
            },{
                model: Comment,
                include: [{
                    mode: User,
                    attributes: ['id', 'nickname'],
                }]
            }]
        });
        res.status(200).json(posts);
    }catch{
        console.error(error);
        next(error);
    }
})

module.exports = router;