// build your `/api/projects` router here
const express = require('express');
const Projects = require('./model');

const router = express.Router();

router.get('/projects', async (req, res) => {
    try {
        const projects = await Projects.getProjects();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: 'Failed to get projects' });
    }
});

router.post('/projects', async (req, res) => {
    try {
        const project = await Projects.addProject(req.body);
        res.status(201).json(project);
    } catch (err) {
        res.status(500).json({ message: 'Failed to create new projecy' });
    }
});

module.exports = router;
