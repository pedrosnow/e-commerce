const express = require("express");
const app = express();
const Rotas = require('./routes/routes');



// Rotas
app.use(Rotas);


// Visao
app.set('view engine', 'ejs');
app.set('views', 'views')



//CSS e JS - estaticos
app.use(express.static("public"));






module.exports = app;