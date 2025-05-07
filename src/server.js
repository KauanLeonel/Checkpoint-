import express from "express"
import clientRoutes from "./routes/clientRoutes"
import companyRoutes from "./routes/companyRoutes"
import feedbackRoutes from "./routes/feedbackRoutes"
import kartRoutes from "./routes/kartRoutes"
import productRoutes from "./routes/productRoutes"
import requestRoutes from "./routes/requestRoutes"
import userRoutes from "./routes/userRoutes"
import cors from 'cors'

const app = express();
const port = 3000;

//MidWare
app.use(cors())
app.use(express.json())

//Rotas para o roteador
app.use("/client", clientRoutes)
app.use("/company", companyRoutes)
app.use("/feedback", feedbackRoutes)
app.use("/kart", kartRoutes)
app.use("/product", productRoutes)
app.use("/request", requestRoutes)
app.use("/user", userRoutes )

//Porta do server
app.listen(port, () =>{
    console.log("Porta rodando");
})