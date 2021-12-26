require("dotenv").config();
require("./config/database").connect();

const express = require("express");
const cors = require("cors");

const app = express();
const router = require("./routes/route");

app.use(express.json());
app.use(cors());

app.use(router);

app.get("/", (req, res) => {
	return res.status(200).send("Hello World!");
});

module.exports = app;
