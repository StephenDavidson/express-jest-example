const express = require('express');

const app = express();
require('./user/user.js')(app);

app.get('/', (req, res) => res.send('GET method'));
app.post('/', (req, res) => res.send('POST method'));
app.delete('/', (req, res) => res.send('DELETE method'));
app.put('/', (req, res) => res.send('PUT method'));

module.exports = app;
