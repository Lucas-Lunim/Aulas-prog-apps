import express from 'express';
import initRoutes from './src/routes/routes.js'  

const app = express();

const port = 8080;

initRoutes(app)

app.use(express.json());

app.get("/", (req,res) => {
    return res.send("servidor ligado!")
})

app.listen(port, () => {
    console.log("Servidor está rodando em http://localhost:8080")
})