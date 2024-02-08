const express = require("express");
const connectDB = require("./config/db");
const dontenv = require("dotenv").config();
const port = 5000;

//connection a la DB
connectDB();

const app = express();

//Moddleware qui permet de traiter les donnés de la request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/post.routes"));

// Lancer le server
app.listen(port, () => console.log("le server à démarré au port " + port));
