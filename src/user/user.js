module.exports = (app) => {
  app.get('/user', (req, res) => res.send('GET method'));
  app.post('/user', (req, res) => res.send('POST method'));
  app.delete('/user', (req, res) => res.send('DELETE method'));
  app.put('/user', (req, res) => res.send('PUT method'));
};
