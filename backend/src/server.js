const express = require('express');
const routes = require('./routes');

const app = express();

// Get(get information), Post(add information), Put(edit), Delete
// req.query - Access query params (for filters) - post
// req.params - Access route params (for edit or delete) - put
// req.body - Access body of the requisition (for create and edit)

app.use(express.json());
app.use(routes);

app.listen(3333);
