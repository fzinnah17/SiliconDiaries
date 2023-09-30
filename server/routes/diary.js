// import express from 'express';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import diaryData from '../data/diaries.js';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const router = express.Router();

// router.get('/', (req, res) => {
//   res.status(200).json(diaryData);
// });

// router.get('/:diaryId', (req, res) => {
//   res.status(200).sendFile(path.resolve(__dirname, '../public/diary.html')); // Make sure to create this diary.html file later on
// });

// export default router;


import express from 'express';
import DiariesController from '../controllers/diaries.js';

const router = express.Router();

router.get('/', DiariesController.getDiaries);
router.get('/:diaryId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/diary.html'));
});

export default router;
