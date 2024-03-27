import express from 'express';
const router = express.Router();

import taskController from '../../controllers/task.controller';
router.get('/', taskController.getAll);
router.get('/:id', taskController.getTaskById);
router.post('/', taskController.createTask);
router.delete('/:id', taskController.deleteTask);
router.put('/:id', taskController.updateTask);

export default router;