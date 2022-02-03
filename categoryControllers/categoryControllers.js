// * PAINEL DE CONTROLLERS

const express = require('express');
const router = express.Router();

router.get('/admin/categories',(req, res) =>{
    res.render('admin/categories/new');
})

router.post('/categories/dinheiro',(req, res) =>{
    // let name = req.body.nome;
    // let money = req.body.num;

    res.send(`<h1>Ainda Bem que foi um teste!!! </br></br>
        Parabens vc foi enganado kkkk...
    `)

    
})

module.exports = router;