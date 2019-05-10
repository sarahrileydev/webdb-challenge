// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./data/database.db3"
    },
    migrations: {
      directory: "./data/migrations"
    },

    seeds: {
      directory: "./data/seeds"
    },

    pool: {
      // runs after a connection is made to the sqlite engine
      afterCreate: (conn, done) => {
        // by default SQLite will not enforce Foreign Keys
        conn.run("PRAGMA foreign_keys = ON", done); // turn on FK enforcement
      }
    }
  }
};
