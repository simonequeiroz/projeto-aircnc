//index() listagem de sessões
//show() lista 1 sessão
//store() cria 1 sessão
//update() altera 1 sessão
//destroy() excluir 1 sessão

// routes/sessao.routes.js
const express = require('express');
const SessaoController = require('../controllers/Sessao.Controller')

const router = express.Router();

router.post('/', SessaoController.store)

module.exports = router;