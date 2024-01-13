const Socials = require('../models/social');
const createPath = require('../helpers/create-path');

const getContact = (req, res) => {
    const title = 'Contact'
    Socials
    .find()
    .then((socials) => res.render(createPath('contact'), { title, socials }))
    .catch((error) => {
        console.log(error);
        res.render(createPath('404'), { title: 'Error' });
    })
}

module.exports = { getContact }