const db = require("../data/dbConfig");

module.exports = {
  find,
  findById,
  add,
  update,
  remove
};

function find() {
  return db("projects");
}

function findByID(id) {
  return db("projects")
    .where({ id })
    .first();
}