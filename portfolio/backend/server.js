const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const projectRouter = require("./routes/projects");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/projects", projectRouter);

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB connected");
});

app.listen(port, () => {
  console.log(`Server running on: ${port}`);
});
