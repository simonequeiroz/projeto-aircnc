const Usuario = require('../models/Usuarios');

const store = async (req, res) =>{
    const { email } = req.body
    console.log(email)

    let usuario = await Usuario.findOne({ email }); // verifica se usuário existe

    if (!usuario) { // se usuário não existir, insere (create)
        usuario = await Usuario.create({ email});
    }   

    return res.json(usuario)
}

module.exports = { store }


// module.exports = {
//     async store(req, res){
//         const { email } = req.body
//         // ...
//         usuario = await Usuario.create({ email});

//         return res.json(usuario)
//     }
// };
