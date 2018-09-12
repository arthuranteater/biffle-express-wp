const express = require("express");
const app = express();
const port = process.env.PORT || 3003;
const queries = require("./queries.js");

app.get("/", (request, response) => {
  queries.list().then(result => response.json({ result }));
});

app.listen(port, () => console.log(`listening on ${port}`));

// We will be writing our routes in this file
// example: app.get()

module.exports = app;
