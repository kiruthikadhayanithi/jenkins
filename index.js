const express = require('express');
const app = express();

const port = 7000;

            app.get('/', (req, res) => {
              res.send('Hello Wk!');
            });

app.listen(port, () => {
  console.log(`Example listening on port ${port}`);
});
