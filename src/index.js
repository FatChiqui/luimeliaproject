
const express = require('express');
const path = require('path');
const app = express();

// SETTINGS
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//MIDDLEWARES

// ROUTES
app.use(require('./routes'))


//listening the server
app.listen(app.get('port'), () => {

  console.log('server on port', app.get('port'))

});


// STATIC FILES

app.use(express.static(path.join(__dirname, 'public')));
