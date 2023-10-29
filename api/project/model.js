// build your `Project` model here
const db = require("../../data/dbConfig");

async function getProjects() {
  const projects = await db("projects");
  const result = [];
  for (let i = 0; i < projects.length; i++) {
    result.push({
      project_id: projects[i].project_id,
      project_name: projects[i].project_name,
      project_description: projects[i].project_description,
      project_completed: projects[i].project_completed === 1 ? true : false,
    });
  }
  return result;
}

async function findById(project_id) {
  const project = await db("projects").where("project_id", project_id);

  return project;
}

async function add(newProject) {
  // EXERCISE D
  /*
      1D- This function creates a new scheme and resolves to _the newly created scheme_.
    */
  const [project_id] = await db("projects").insert(newProject);

  let updateProj;

  const project = await findById(project_id);
  for (let i = 0; i < project.length; i++) {
    if (
      project[i].project_completed === 0 ||
      project[i].project_completed === null
    ) {
      project[i].project_completed = false;
    } else if (project[i].project_completed === 1) {
      project[i].project_completed = true;
    }
    updateProj = project[i];
  }
  return updateProj;
}

module.exports = {
  getProjects,
  findById,
  add,
};