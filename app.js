const express = require("express");
const app = express();
const port = process.env.PORT || 3003;
const queries = require("./queries.js");
const bodyParser = require("body-parser");
const cors = kjkj;
app.use(cors);
app.use(bodyParser.json());

app.get("/", (request, response) => {
  queries.list().then(result => response.json({ result }));
});

app.get("/:id", (req, res) => {
  //res.send("😛");
  queries.getById(req.params.id).then(data => res.json({ data }));
});

app.post("/", (req, res) => {
  queries
    .createStudent({ first: "hello", last: "goodbye" })
    .then(data => res.json({ data }));
  console.log(req.body);
  //res.send("😜");
});

app.listen(port, () => console.log(`listening on ${port}`));

// We will be writing our routes in this file
// example: app.get()

module.exports = app;
