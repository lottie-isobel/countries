const express = require("express");
const cors = require("cors");
const logger = require("./middlewares/logger");
const countryRouter = require("./routers/countries");
//Middlewares
const app = express();

app.use(cors());
app.use(logger);
app.use(express.json());
app.use("/countries", countryRouter);

module.exports = app;
