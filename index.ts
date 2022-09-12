import express from "express";
import bodyParser from "body-parser";
import { checkToken } from "./src/middleware/secretToken";

const PORT = 3000;
const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(checkToken)

app.get('/', (req, res) => {
    res.status(200).json({message: "OK"});
})

app.post('/', (req, res) => {
    res.status(200).json({message: "OK"});
})

app.listen(PORT, () => {
    console.log("App running on port: " + PORT)
})