const express = require('express');
const router = express.Router();

const  { getNews, deleteNews, editNews, getNewsById, addNews } = require('../controllers/api-news-controller')

router.get('/api/news', getNews);

router.post('/api/news-app', addNews);

router.get('/api/news/:id', getNewsById);

router.delete('/api/news/:id', deleteNews);

router.put('/api/edit/:id', editNews);



module.exports = router;