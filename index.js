const express = require('express');
const app = express();

// ? CONTROLLERS
const categoriesControllers = require('./categoryControllers/categoryControllers');
app.use('/',categoriesControllers);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
    console.log('servidor iniciado');
});

// * DEPENDECIAS
app.set('view engine',('ejs'));

app.get('/',(req, res) =>{
    res.render('index');
})