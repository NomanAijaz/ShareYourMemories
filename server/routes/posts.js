import express from 'express'
const router = express.Router();
import upload from '../middleware/upload-image.js';

router.post('/post', upload.single('picture'), createPost)
router.get('')
export default router;