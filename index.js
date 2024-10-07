const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const { router } = require('./routers/routers');
app.use(router)

app.get('/home', (req, res)=>{
    res.json({
        message: "Welcome home!"
    });
});




const port = 5000;
app.listen(port, ()=>{
    console.log(`Server listening to port: ${port}`)
});