import express from "express"
import cors from 'cors'

const app = express();
const port = 3000;

//MidWare
app.use(cors())
app.use(express.json())

//Rotas para o roteador


//Porta do server
app.listen(port, () =>{
    console.log("Porta rodando");
})