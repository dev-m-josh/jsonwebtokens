const express = require('express');
const jwt = require('jsonwebtoken');
const joi = require('joi');

const app = express();
app.use(express.json());
const { router, verifyRouter } = require('./routers/routers');
const { verifyToken, errorHandler } = require('./middleware/middleware');
app.use(router);
app.use(verifyToken);
app.use(verifyRouter);
app.use(errorHandler);

app.get('/', (req, res)=>{
    res.json({
        message: "Welcome home!"
    });
});


const port = 5000;
app.listen(port, ()=>{
    console.log(`Server listening to port: ${port}`)
});