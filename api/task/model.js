// build your `Task` model here
const db = require("../../data/dbConfig");

async function getTasks() {
  const tasks = await db("Tasks as t").join(
    "projects as p",
    "t.project_id",
    "p.project_id"
  );
  const result = [];
  for (let i = 0; i < tasks.length; i++) {
    result.push({
      task_id: tasks[i].task_id,
      task_description: tasks[i].task_description,
      task_notes: tasks[i].task_notes,
      task_completed: tasks[i].task_completed === 1 ? true : false,
      project_name: tasks[i].project_name,
      project_description: tasks[i].project_description,
    });
  }
  //   console.log(result);
  return result;
}

async function findById(resource_id) {
  const resource = await db("Tasks").where("task_id", resource_id);
  //   console.log(resource);
  return resource;
}

async function add(task) {
  // EXERCISE D
  /*
      1D- This function creates a new scheme and resolves to _the newly created scheme_.
    */
  const [task_id] = await db("Tasks").insert(task);
  const newTask = await findById(task_id);

  return {
    task_completed: newTask[0].task_completed === 1 ? true : false,
    task_description: newTask[0].task_description,
    task_notes: newTask[0].task_notes,
  };
}

module.exports = {
  getTasks,
  findById,
  add,
};
