const connection = require("./knexfile")[process.env.NODE_ENV || "development"];
const knex = require("knex")(connection);

function ListAll() {
  return knex("classmates")
    .select()
    .from("classmates")
    .orderBy("id", "descending");
}

module.exports = {
  list() {
    return knex("classmates");
  }
};
