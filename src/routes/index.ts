import express from 'express';
const router = express.Router();

import v1Api from './v1.api';
router.use('/v1', v1Api);

export default router;