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

export { serverCode, envServer, DotEnvFileCode };
