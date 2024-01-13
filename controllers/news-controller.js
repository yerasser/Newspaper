const News = require('../models/post');
const createPath = require('../helpers/create-path');

const errorHandle = (res, error) => {
    console.log(error);
    res.render(createPath('404'), { title: 'Error' });
}

const getNews = (req, res) => {
    const title = 'News';
    News
    .find()
    .then((posts) => res.render(createPath('news'), { title, posts }))
    .catch((error) => errorHandle(res, error))
}

const deleteNews = (req, res) => {
    News
    .findByIdAndDelete(req.params.id)
    .then((post) => res.sendStatus(200))
    .catch((error) => errorHandle(res, error))
}

const getEditNews = (req, res) => {
    const title = 'Edit News';
    News
    .findById(req.params.id)
    .then((post) => res.render(createPath('news-edit'), { title, post }))
    .catch((error) => errorHandle(res, error))
}

const editNews = (req, res) => {
    const { title, author, text } = req.body;
    const { id } = req.params;
    News
    .findByIdAndUpdate(id, { title, author, text })
    .then((result) => res.redirect(`/news/${id}`))
    .catch((error) => errorHandle(res, error))
}

const getNewsById = (req, res) => {
    const title = 'News Inner';
    News
    .findById(req.params.id)
    .then((post) => res.render(createPath('news-inner'), { title, post }))
    .catch((error) => errorHandle(res, error))
}

const getAddNews = (req, res) => {
    const title = 'News App'
    res.render(createPath('news-app'), { title });
}

const addNews = (req, res) => {
    const { title, author, text } = req.body;
    const post = new News({title, author, text})
    post
    .save()
    .then(result => res.redirect('/news'))
    .catch((error) => errorHandle(res, error))
}

module.exports = { getNews, deleteNews, getEditNews, editNews, getNewsById, getAddNews, addNews }