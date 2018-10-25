const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, 'build')));
}

// for local env, use /client/public folder
else {
  app.use(express.static(path.join(__dirname, 'public')));
}

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/build/index.html`);
});

app.listen(PORT, error => {
  error
  ? console.error(error)
  : console.info(`Listening on port ${PORT}.`)
});
