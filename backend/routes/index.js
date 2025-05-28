// routes/index.js
const express = require("express");
const sessaoRoutes = require("./Sessao.routes");

const router = express.Router();

// prefixo de URL   →   módulo de rotas
router.use("/sessao", sessaoRoutes);

module.exports = router;
