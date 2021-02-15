//Imports 
//itemRoutes is coming from folder routes, items.js file

const express = require('express');
const app = express();
const itemRoutes = require('./routes/items')
const ExpressError = require('expressError');

app.use(express.json());
app.use('items', itemRoutes);

/**404 handler */
/** 
 * The app.use() function is used to mount the specified middleware function(s) 
 * at the path which is being specified. It is mostly used to set up middleware for your application.

Syntax:

app.use(path, callback)
Parameters:

path: It is the path for which the middleware function is being called.
 It can be a string representing a path or path pattern or regular expression
  pattern to match the paths.
callback: It is a middleware function or a series/array of middleware functions.
*/
app.use(function(req, res, next) {
    return next(new ExpressError('Not Found', 404));
})
/**general error handler */

app.use((err, req, res, next) => {
    res.status(err.status || 500);
  
    return res.json({
      error: err.message,
    });
  });
  
module.exports = app


