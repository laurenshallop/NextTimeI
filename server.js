// Server 
const express = require('express')
const app = express ();
const PORT = process.env.PORT || 3000

require('dotenv') .config()
// connect to DB
app.use(express.json())
app.use(express.urlencoded({extended:false}))
// Handlebars.js as apps template engine of choice 
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const {homeRoutes, apiRoutes} = require('./routes');

// Static Middleware
app.use('/api', apiRoutes)
app.use('/', homeRoutes)
// add the Route / "GET" request 
// app.get()

// // add the route / "POST" request 
// app.post()

// // HTML route
// app.get()


// Server to listen 
app.listen(PORT, function() {
    console.log("API server now on PORT" + PORT);
});