const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

process.env.PORT_ENV === 'production' 
? app.use(express.static(path.join(__dirname, 'build')))
: app.use(express.static(path.join(__dirname, 'develop'))); 

app.get('*', (request, response) => {
  response.sendFile(`${__dirname}/build/index.html`);
});

app.listen(PORT, error => {
  error
  ? console.error(error)
  : console.info(`Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`)
});
