const express = require('express');
const { Autor, Libro, Biblioteca } = require('../biblioteca');
const cors = require("cors");

const app = express();

app.use(
    cors({
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
    })
);

const biblioteca = new Biblioteca();
const autor1 = new Autor("Juan Bosch", "Dominicana");
const libro1 = new Libro("El fuego de la vida", autor1, 1965);
biblioteca.agregarLibro(libro1);


app.use(express.json());


app.get('/', (req, res) => {
    res.send('Bienvenido a la API de Gestión de Biblioteca');
});

app.get('/api/libros', (req, res) => {
    res.json(biblioteca.listarLibros());
});


app.get('/api/libros/titulo/:titulo', (req, res) => {
    const titulo = req.params.titulo;
    const libros = biblioteca.buscarPorTitulo(titulo);
    if (libros.length === 0) {
        res.status(404).json({ error: 'No se encontró ningún libro con ese título' });
    } else {
        res.json(libros.map(libro => libro.informacion()));
    }
});


app.get('/api/libros/autor/:autor', (req, res) => {
    const autor = req.params.autor;
    const libros = biblioteca.buscarPorAutor(autor);
    if (libros.length === 0) {
        res.status(404).json({ error: 'No se encontró ningún libro de ese autor' });
    } else {
        res.json(libros.map(libro => libro.informacion()));
    }
});


app.get('/api/libros/disponibles', (req, res) => {
    const disponibles = biblioteca.librosDisponibles();
    res.json(disponibles.map(libro => libro.informacion()));
});

// Iniciar el servidor
export default app;

