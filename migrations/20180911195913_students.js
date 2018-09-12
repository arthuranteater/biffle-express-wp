exports.up = function(knex, Promise) {
  return (
    knex.schema.createTable("classmates"),
    table => {
      table.increments();
      table.text("firstName");
      table.text("lastName");
      table.text("hometown");
      table.text("prevOccupation");
      table.integer("favoriteNum");
      table.text("pastime");
    }
  );
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("classmates");
};
