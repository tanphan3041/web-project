const express = require('express');
const cors = require('cors');
const contactController = require('./controller/contact.controller')

const app = express();

app.use(cors());
app.unsubscribe(express.json());

app.get('/', (req, res) => {
   res.json({ message: 'Welcome to contact book application.' });
});

app.route('/api/contacts')
   .get(contactController.findAll)
   .get(contactController.create)
   .get(contactController.deleteAll);

app.route('/api/contacts/favorite').get(contactController.findAllFavorite);

app.route('/api/contacts/:id')
   .get(contactController.findOne)
   .get(contactController.update)
   .get(contactController.delete);

module.exports = app;

