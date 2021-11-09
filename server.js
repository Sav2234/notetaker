const express = require('express');
const api = require('./routes/api.js');
const html = require('./routes/html-routes.js')

const PORT = process.env.port || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', api);
app.use('/', html);



app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);