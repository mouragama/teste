const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// ? CONTROLLERS
const categoriesControllers = require('./categoryControllers/categoryControllers');
app.use('/',categoriesControllers);

// ? Rota Comum
app.listen(8080, () =>{console.log('teste de servidor!!!')})

// * Rota Heroku
// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () =>{
//     console.log('servidor iniciado');
// });

// * DEPENDECIAS
app.set('view engine',('ejs'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/',(req, res) =>{
    res.render('index');
})