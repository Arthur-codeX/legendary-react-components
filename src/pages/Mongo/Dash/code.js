var serverJs = `
const express = require("express");
const connectDB = require("./DB/connection");
require("dotenv").config();

connectDB();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World! From Express");
});

app.listen(port, () => {
  var mess = "Am Listening at http://localhost:" + port;
  console.log(mess);
});
`;

const connectionJs = `
const mongoose = require("mongoose");
require("dotenv").config();
const URI = process.env.DB;
console.log(URI);
const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connected");
  } catch (e) {
    console.log(e.message);
    console.log("failed to Connect");
  }
};

module.exports = connectDB;
`;

const usersSchema = `
//Sample users schema

const Mongoose = require("mongoose");

const Schema = Mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  secondName: { type: String, required: true },
  idNo: { type: Number, required: true, unique: true },
  phoneNo: { type: Number, required: true, unique: true },
  //   dateCreated: { type: Number, required: true },
  type: { type: String, required: true },
});

const userDB = Mongoose.model("userDB", userSchema);

module.exports = { userDB };
`;

const modelServerJs = `
//go to http://localhost:4234/newUser
const express = require("express");
const connectDB = require("./DB/connect");
const { userDB } = require("./model/Schema");

require("dotenv").config();

connectDB();

const app = express();
const port = process.env.PORT;

var user = {
  firstName: "John",
  secondName: "Mwangi",
  idNo: 123456,
  phoneNo: 453423,
  type: "Admin",
};

async function CreateUSer(user) {
  return new Promise((resolve) => {
    userDB.create(user, (err, doc) => {
      if (err) {
        console.log("Error Creating New USer");
        console.log(err.message);
        resolve(false);
      }
      console.log(doc);
      resolve(true);
    });
  });
}

app.get("/", async (req, res) => {
  res.send("Hello World! From Express");
});

app.get("/newUser", async (req, res) => {
  try {
    var b = await CreateUSer(user);
    if (b) {
      res.send("User Created");
      return;
    }
    res.send("Failed To Create Users");
  } catch (error) {
    res.send("Super Error");
  }
});

app.listen(port, () => {
  var mess = "Am Listening at http://localhost:" + port;
  console.log(mess);
});
`;

export { serverJs, connectionJs, usersSchema, modelServerJs };
