// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: {
      filename: "postgresql://localhost/hunt_g95"
    }
  },

  production: {
    client: "pg",
    connection: "process.env.postgresql://localhost/hunt_g95"
  }
};
