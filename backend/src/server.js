const express = require('express');

const app = express();

// Get(get information), Post(add information), Put(edit), Delete
app.get('/', (req, res) => {
  return res.json({ message: 'Hello Brother' });
});
app.listen(3333);
