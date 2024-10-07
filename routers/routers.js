
const jwt = require('jsonwebtoken');
const router = require("express").Router();

const { getToken, verifyToken } = require('../controllers/controllers');

//get token
router.post('/api/login', getToken);

//verify token
router.post('/api/posts', verifyToken, (req, res)=>{
    jwt.verify(req.token, 'secretkey', (err, authData)=>{
        if (err) {
            res.sendStatus(403);
        } else {
            res.json({
                message:"post created...",
                authData
            }) ;
        };
    });
});

module.exports = {router}