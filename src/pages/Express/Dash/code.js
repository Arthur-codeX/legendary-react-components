let serverCode = `
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World! From Express");
});

app.listen(port, () => {
  var mess = "Am Listening at http://localhost:" + port;
  console.log(mess);
});
`;

let envServer = `const express = require("express");

require("dotenv").config();

const app = express();
const port = process.env.PORT;
console.log(port);
console.log(process.env.MESSAGE);
app.get("/", (req, res) => {
  res.send("Hello World! From Express");
});

app.listen(port, () => {
  var mess = "Am Listening at http://localhost:" + port;
  console.log(mess);
});
`;

const DotEnvFileCode = `
PORT=3000
MESSAGE="Hello Dot Env Working"`;

const MiddleWareCode = `const express = require("express");
const app = express();
const port = 8080;

app.use(AlwaysRunningMiddleWare);

app.get("/", (req, res) => {
  res.send("Hello World! From Express");
});

app.get("/users", authUser, (req, res) => {
  console.log(req.query.name);
  res.send("All Users");
});

app.listen(port, () => {
  var mess = "Am Listening at http://localhost:" + port;
  console.log(mess);
});

function AlwaysRunningMiddleWare(req, res, next) {
  console.log("This Middle ware is always running");
  next();
}

function authUser(req, res, next) {
  var name = req.query.name;

  if (name === "maggy") {
    console.log("Its Maggy. Let Him In");
    next();
    return;
  }
  res.status(403).send("Not Authorized");
}
`;

const DBFile = `
const getAll = (DB) => {
  return new Promise((resolve, reject) => {
    DB.find({}, (err, doc) => {
      if (err) reject(err.message);
      resolve(doc);
    });
  });
};

module.exports = { getAll };
`;

const ControllerFile = `const DBCreate = require("./../DB/create");
const DBRead = require("./../DB/read");
const { userDB } = require("./../model/Schema");

const getAll = async (req, res) => {
  try {
    let data = await DBRead.getAll(userDB);
    res.status(200).json(data);
  } catch (e) {
    console.log(e);
    res.status(500).json(false);
  }
};

const Insert = async (req, res) => {
  console.log(req.body);

  try {
    let data = await DBCreate.create(userDB, req.body);
    res.status(201).json(data);
  } catch (e) {
    console.log(e);
    res.status(500).json(false);
  }
};

module.exports = { getAll, Insert };`;

const routeFile = `
const express = require("express");

const router = express.Router();

const { getAll, Insert } = require("./../controller/user");

router.get("/", (req, res) => {
  res.status(200).send("Users Route Working");
});

router.get("/getAll", getAll);

router.post("/insert", Insert);

module.exports = router;
`;

const routerServer = `
const express = require("express");
const connectDB = require("./DB/connect");
const users = require("./routes/users");

connectDB();
require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/users", users);

app.get("/", (req, res) => {
  res.send("Tulivu api working");
});

app.listen(port, () => {
  var mess = "Am Listening at http://localhost:" + port;
  console.log(mess);
});
`;

export {
  serverCode,
  envServer,
  DotEnvFileCode,
  MiddleWareCode,
  DBFile,
  ControllerFile,
  routeFile,
  routerServer,
};
