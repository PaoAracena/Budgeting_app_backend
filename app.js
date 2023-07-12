
// DEPENDENCIES
const express = require("express");
const cors = require("cors");
// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use((req, res, next) => {
  console.log("This code runs for every request");
  next();
});
app.use(express.json()); // Parse incoming JSON
app.use(cors());
// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to transactions App");
});

const transactionsController = require("./controllers/transactionsController.js");
app.use("/transactions", transactionsController);

// 404 PAGE
app.get("*", (req, res) => {
    res.status(404).json({ error: "Page not found" });
  });
// EXPORT
module.exports = app;