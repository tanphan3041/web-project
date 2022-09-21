const express = require('express');
const cors = require('cors');
const contactController = require('./controller/contact.controller')
const ApiError = require('./api-error');

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

//Handle 404 response.
app.use((req, res, next) => {
   //Handler for unknown route
   //       Call next() to pass to the error handling middleware.
   return next(new ApiError(404, 'Resource not found'));
});

//Define error-handling middleware last, after other app.use() and routes calls.
app.use((error, req, res) => {
   //The centralized error handling middleware.
   //In any route handler, calling next(error)
   //    Will pass to this error handling middleware.
   return res.status(error.statusCode || 500).json({
      message: error.message || 'Internal server Error',
   });
});


module.exports = app;

