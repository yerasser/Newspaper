const News = require('../models/post');
const createPath = require('../helpers/create-path');

const errorHandle = (res, error) => {
    res.status(500).send(error)
}

const getNews = (req, res) => {
    const title = 'News';
    News
    .find()
    .sort({createdAdd: -1})
    .then((posts) => res.status(200).json(posts))
    .catch((error) => errorHandle(res, error))
}

const deleteNews = (req, res) => {
    News
    .findByIdAndDelete(req.params.id)
    .then((post) => res.status(200).json(id))
    .catch((error) => errorHandle(res, error))
}

const editNews = (req, res) => {
    const { title, author, text } = req.body;
    const { id } = req.params;
    News
    .findByIdAndUpdate(id, { title, author, text })
    .then((result) => res.status(200).json(post))
    .catch((error) => errorHandle(res, error))
}

const getNewsById = (req, res) => {
    const title = 'News Inner';
    News
    .findById(req.params.id)
    .then((post) => (post) => res.status(200).json(post))
    .catch((error) => errorHandle(res, error))
}

const addNews = (req, res) => {
    const { title, author, text } = req.body;
    const post = new News({title, author, text})
    post
    .save()
    .then(result => res.status(200).json(post))
    .catch((error) => errorHandle(res, error))
}

module.exports = { getNews, deleteNews, editNews, getNewsById, addNews }