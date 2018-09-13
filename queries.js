const connection = require("./knexfile")[process.env.NODE_ENV || "development"];
const knex = require("knex")(connection);

function ListAll() {
  return knex("classmates")
    .select()
    .from("classmates")
    .orderBy("id", "descending");
}

module.exports = {
  create(callItWhatYouWill) {
    return database("students").insert(callItWhatYouWill);
  },
  list() {
    return knex("classmates");
  },
  getById(id) {
    return knex
      .select()
      .from("classmates")
      .where("id", id);
  },
  createStudent(student) {
    return knex("classmates").insert(student, ["id", "firstName", "lastName"]);
  },
  deleteStudent(id) {
    return knex
      .select()
      .from("classmates")
      .where("id", id)
      .del()
      .returning("*");
  },
  updateStudent(id, body) {
    return knex
      .select()
      .from("classmates")
      .where("id", id)
      .update(body)
      .returning("*");
  }
};
