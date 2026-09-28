const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
const donationRouter = require("./Router/DonationRouter");

app.use("/api", donationRouter);

module.exports = app;