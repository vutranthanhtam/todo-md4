import express from 'express';
const router = express.Router();

import taskModule from './modules/task.module';
router.use('/task', taskModule);

export default router;