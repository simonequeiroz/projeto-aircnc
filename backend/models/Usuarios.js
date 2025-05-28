const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    email: {
        type: String,  // tipo de variavel: é um string texto.
        required: true,    // porque é necessário preencher o campo, não pode passar em branco
        unique: true,    // é um email unico
    }

});

module.exports = mongoose.model('Usuario', UsuarioSchema)


