
const joi = require('joi');
const jwt = require('jsonwebtoken');
const router = require("express").Router();
const verifyRouter = require("express").Router();

const { getToken } = require('../middleware/middleware');
const { postsRouter } = require('../controllers/controllers');

//get token
router.post('/api/login', getToken);

//verify token
verifyRouter.post('/api/posts', postsRouter);

module.exports = {router, verifyRouter}