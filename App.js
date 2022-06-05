const express = require("express");

const app = express();

app.get('/', (req, res)=>{
    res.send('wello')
});


app.listen(3000)