const express = require('express');
const router = express.Router();

const  { getNews, deleteNews, getEditNews, editNews, getNewsById, getAddNews, addNews } = require('../controllers/news-controller')

router.get('/news', getNews);
router.get('/news/:id', getNewsById);
router.delete('/news/:id', deleteNews);
router.get('/edit/:id', getEditNews);
router.put('/edit/:id', editNews);
router.get('/news-app', getAddNews);
router.post('/news-app', addNews);


module.exports = router;