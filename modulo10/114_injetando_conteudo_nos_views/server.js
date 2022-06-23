require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, UseUnifiedTopology: true })
  .then(() => {
    console.log('Conectei à base de dados.');
    app.emit('Pronto');
  })
  .catch(e => console.log(e));

const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
 
const sessionOptions = session({
    secret: 'texto q ninguem vai saber',
    //store: new MongoStore({mongooseConnection: mongoose.connection}),
    resave:false,
    saveUninitialized: false,
    cookie:{
        maxAge:1000 *60*60*24*7, // Tempo de duração do cookie (7 dias)
        httpOnly:true
    },
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING})
});
 
app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Nossos próprios middlewares
app.use(middlewareGlobal);
app.use(routes);

app.on('Pronto', () => {
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  });
});