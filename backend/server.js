const express = require("express");
const connectDB = require("./config/db");
const dontenv = require("dotenv").config();
const cors = require("cors");
const port = 5000;
const allowedOrigin = ["http://localhost:3000", "http://localhost:3001"];

//connection a la DB
connectDB();

const app = express();

//Autorisation cors
app.use(
  cors({
    origin: "*",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

//Moddleware qui permet de traiter les donnés de la request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/post.routes"));

// Lancer le server
app.listen(port, () => console.log("le server à démarré au port " + port));
