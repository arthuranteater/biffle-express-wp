const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3003;
const queries = require("./queries.js");

app.use(bodyParser.json());
app.use(cors());

app.get("/", (request, response) => {
  queries.list().then(result => response.json({ result }));
});

app.get("/:id", (req, res) => {
  //res.send("😛");
  queries.getById(req.params.id).then(data => res.json({ data }));
});

app.post("/", (req, res) => {
  queries.createStudent(req.body).then(data => res.json({ data }));
  //res.send("😜");
});

app.listen(port, () => console.log(`listening on ${port}`));

// We will be writing our routes in this file
// example: app.get()

module.exports = app;
