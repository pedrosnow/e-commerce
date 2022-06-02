const express = require('express')
const app = express()
const engine = require('express-handlebars');
const bodyParser = require('body-parser')


//  handlebars

const handlebars = engine.create({defaultLayout: 'main'})
app.engine('handlebars', handlebars.engine);

app.set('view engine', 'handlebars');
app.set('views', './App/views');


// Body parde

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))


// Rotas
app.get('/', (req, res) => {
  res.render('home')
})

app.post('/salvar', (req, res)=>{
  res.send(req.body.nome)
})



app.listen(3000)

