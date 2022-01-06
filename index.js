const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
    console.log('servidor iniciado');
});

// * DEPENDECIAS
app.set('view engine',('ejs'));

app.get('/',(req, res) =>{
    res.render('index');
})