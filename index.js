const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const homeController = require('./controller/homeController')
const comunidadeController = require('./controller/comunidadeController')

app.use(bodyParser.json())

app.set('views', './views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(express.static('./assets/images'))
app.use(express.static('./assets/css'))
app.use(express.static('./assets/js'))

app.use('/', homeController)
app.use('/', comunidadeController)

app.listen(3000, () => console.log("Servidor rodando na porta 3000"))