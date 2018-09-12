const express = require("express");
const app = express();
const port = process.env.PORT || 3003;

app.listen(port, () => console.log(`listening on ${port}`));

app.get("/", (request, response) => {
  response.send("THE ROUTE WORKED");
});

// We will be writing our routes in this file
// example: app.get()

module.exports = app;
