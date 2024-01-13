const express = require('express');
const path = require('path');

const createPath = (page) => path.resolve(__dirname, '../ejs-views', `${page}.ejs`);

module.exports = createPath