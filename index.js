const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

//Initiate the app
const app = express();
app.use(express.json());//permite enviar dados para aplicação em formato json

//Initiate the DB
mongoose.connect('mongoNode://localhost:27017/nodeRocket', {useNewUrlParser:true});

requireDir('./src/models');

//Rotas
app.use("/api",require("./src/routes"));

app.listen(3333);