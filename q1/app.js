const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json());
app.use('/', routes);

const PORT = process.env.PORT || 9876;
app.listen(PORT, () => {
  console.log(`Average Calculator running on port ${PORT}`);
});
