const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const NewsRouter = require('./routes/news-routes');
const ContactRouter = require('./routes/contact-routes');
const NewsApiRouter = require('./routes/api-news-routes')
const createPath = require('./helpers/create-path');

const port = 3000;
const app = express();
const db = 'mongodb+srv://erasylserikov36:e6r7a8s5@cluster0.shkyzq4.mongodb.net/?retryWrites=true&w=majority'

app.set('view engine', 'ejs');

mongoose.connect(db).then(() => {
    console.log('Connected')
}).catch((e) => {
    console.log(e)
})

app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({
    extended: false
}));
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    const title = 'Home'
    res.render(createPath('index'), { title });
});
app.use(NewsRouter);
app.use(ContactRouter);
app.use(NewsApiRouter)
app.use((req, res) => {
    const title = 'PageNotFound'
    res
    .status(404)
    .render(createPath('404'), { title })
});

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`)
});