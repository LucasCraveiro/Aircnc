const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();

mongoose.connect(
  'mongodb+srv://aircnc:yr159753@aircnc-kjl9d.mongodb.net/aircncproject?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

// Get(get information), Post(add information), Put(edit), Delete
// req.query - Access query params (for filters) - post
// req.params - Access route params (for edit or delete) - put
// req.body - Access body of the requisition (for create and edit)

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
