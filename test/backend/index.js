const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectedDB = require("./config/db");

connectedDB();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./routes/users"));
app.use("/api/products", require("./routes/product"));
app.use("/api/carts", require("./routes/cart"));

app.listen(port, () => console.log(`Server runngin ${port}`));
