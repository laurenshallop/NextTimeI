// Handlebars.js as apps template engine of choice 
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const routes = require('./controllers/');

// Server 
const app = express ();
const PORT =



// Static Middleware

// add the Route / "GET" request 
app.get()

// add the route / "POST" request 
app.post()

// HTML route
app.get()


// Server to listen 
app.listen(PORT, function() {
    console.log("API server now on PORT" + PORT);
});