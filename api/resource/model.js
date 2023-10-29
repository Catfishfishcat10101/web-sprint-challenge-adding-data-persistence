// build your `Resource` model here
const db = require("../../data/dbConfig");

async function getResources() {
  const resources = await db("resources");

  return resources;
}

async function findById(resource_id) {
  const resource = await db("resources").where("resource_id", resource_id);

  return resource;
}

async function add(newProject) {
  // EXERCISE D
  /*
      1D- This function creates a new scheme and resolves to _the newly created scheme_.
    */
  const [resource_id] = await db("resources").insert(newProject);
  const newResource = await findById(resource_id);

  return { resource_name: newResource[0].resource_name };
}

module.exports = {
  getResources,
  findById,
  add,
};
