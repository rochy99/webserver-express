// Libreria Express
const express = require('express');
const app = express();

const hbs = require('hbs');

// Obtenemos puertos de heroku
const port = process.env.PORT || 3000;

require('./hbs/helpers');

// Middlewares - Contenido estatico.
app.use(express.static(__dirname + '/public'));

// Se puede crear con Midelwares req = request, res = response

// Express HBS
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
    // res.send('Hola mundo');

    // Servicio  que se pueda obtener con send 
    // res.send(salida);

    res.render('home', {
        nombre: 'Franklin'
    });
});


app.get('/about', (req, res) => {

    res.render('about');
});

app.listen(port, () => console.log(`Escuchando en el puerto ${port}`));