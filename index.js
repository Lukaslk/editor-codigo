const express = require('express')
const app = express()

const homeController = require('./controller/homeController')

app.set('views', './views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.static('./assets/images'))

app.use('/', homeController)

app.listen(3000, () => console.log("Servidor rodando na porta 3000"))