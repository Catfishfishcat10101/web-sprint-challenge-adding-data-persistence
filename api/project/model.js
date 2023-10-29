// build your `Project` model here
const db = require('../data/db-onfig');

module.exports = {
    getProjects,
    addProject
};

function getProjects() {
    return db('projects');
}

function addProject(project) {
    return db('projects').insert(project);
}
