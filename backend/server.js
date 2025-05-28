const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // 👈 Importa o CORS
const routes = require("./routes");

const app = express();

// Habilita o CORS para permitir requisições do frontend (React)
// app.use(
//   cors({
//     origin: "http://localhost:5173", // aceita requisições do seu frontend
//     credentials: true,
//   })
// );

// Habilita o uso de JSON no corpo das requisições
app.use(express.json());
app.use(cors());

// Usa as rotas da aplicação
app.use(routes);

async function startDatabase() {
  try {
    await mongoose.connect(
      "mongodb+srv://sqb1410:Psj540@api.o8ohw.mongodb.net/dataArcnc?retryWrites=true&w=majority&appName=Api"
    );
    console.log("✅ Conectado ao MongoDBAtlas");
  } catch (error) {
    console.error("❌ Erro ao conectar ao MongoDB:", error.message);
    process.exit(1); // Encerra o processo se a conexão falhar
  }
}

// Inicia o servidor após a conexão com o banco
startDatabase().then(() => {
  app.get("/", (req, res) => {
    return res.json({ mensagem: "🚀 API ArCNC Rodando ..." });
  });

  const port = process.env.PORT || 3336
  const server = app.listen(port, () => {
    console.log("🚀 Servidor rodando na porta ",port);
  });
});
