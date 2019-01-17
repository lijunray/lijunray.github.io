const express = require('express');
const os = require('os');
const path = require('path');

const app = express();

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.get('/love', (req, res) => {
//   res.send(__dirname);
  res.sendFile(path.join(__dirname, '../../src/client/love/Love.html'));
});
app.listen(8080, () => console.log('Listening on port 8080!'));
