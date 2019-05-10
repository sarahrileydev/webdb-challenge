const db = require("../data/dbConfig");

module.exports = {
  find,
  findById
};

function find() {
  return db("projects");
}

function findById(id) {
  return db("projects")
    .where({ id })
    .first();
}