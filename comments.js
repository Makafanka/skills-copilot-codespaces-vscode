// Create web server 
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./db');
const port = process.env.PORT || 3000;
const cors = require('cors');
const morgan = require('morgan');
const { addComment, getComments } = require('./controllers/comments.js');

// const { getComments } = require('./controllers/comments.js');

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/comments/:id', getComments);
app.post('/comments/:id', addComment);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));