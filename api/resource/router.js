// build your `/api/resources` router here
const express = require('express');
const Resource = require('./model');

const router = express.Router();

// GET /api/resources
router.get('/', async (req, res, next) => {
  try {
    const resources = await Resource.find();
    res.status(200).json(resources);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve resources' });
  }
});

// GET /api/resources/:id
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const resource = await Resource.findById(id);
    if (resource) {
      res.status(200).json(resource);
    } else {
      res.status(404).json({ message: 'Resource not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve resource' });
  }
});

// POST /api/resources
router.post('/', async (req, res) => {
  const { name, role } = req.body;
  try {
    const newResource = await Resource.create({ name, role });
    res.status(201).json(newResource);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create resource' });
  }
});

// PUT /api/resources/:id
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, role } = req.body;
  try {
    const updatedResource = await Resource.findByIdAndUpdate(
      id,
      { name, role },
      { new: true }
    );
    if (updatedResource) {
      res.status(200).json(updatedResource);
    } else {
      res.status(404).json({ message: 'Resource not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update resource' });
  }
});

// DELETE /api/resources/:id
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedResource = await Resource.findByIdAndDelete(id);
    if (deletedResource) {
      res.status(200).json({ message: 'Resource deleted successfully' });
    } else {
      res.status(404).json({ message: 'Resource not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete resource' });
  }
});

module.exports = router;
