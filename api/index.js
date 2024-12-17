const express = require('express');
const { Autor, Libro, Biblioteca } = require('../biblioteca');
const cors = require("cors");

const app = express();

app.use(cors({ origin: "*", methods: ["GET", "POST", "PUT", "DELETE"] }));
app.use(express.json());

// Crear biblioteca y poblarla con libros y autores dominicanos
const biblioteca = new Biblioteca();

const autores = [
    new Autor("Juan Bosch", "Dominicana"),
    new Autor("Pedro Mir", "Dominicana"),
    new Autor("Salomé Ureña", "Dominicana"),
    new Autor("Manuel del Cabral", "Dominicana"),
    new Autor("Marcio Veloz Maggiolo", "Dominicana"),
];

const libros = [
    new Libro("El fuego de la vida", autores[0], 1965),
    new Libro("En el barrio no hay banderas", autores[1], 1963),
    new Libro("Ruinas", autores[2], 1876),
    new Libro("Compadre Mon", autores[3], 1943),
    new Libro("La biografía difusa de Sombra Castañeda", autores[4], 1981),
];

libros.forEach(libro => biblioteca.agregarLibro(libro));

// Rutas de la API
app.get('/', (req, res) => {
    res.json({ message: 'Bienvenido a la API de Gestión de Biblioteca' });
});

// Listar todos los libros
app.get('/api/libros', (req, res) => {
    const libros = biblioteca.listarLibros();
    res.json(libros);
});

// Buscar libros por título
app.get('/api/libros/titulo/:titulo', (req, res) => {
    const titulo = req.params.titulo;
    const libros = biblioteca.buscarPorTitulo(titulo);
    if (libros.length === 0) {
        res.status(404).json({ error: 'No se encontró ningún libro con ese título' });
    } else {
        res.json(libros.map(libro => libro.informacion()));
    }
});

// Buscar libros por autor
app.get('/api/libros/autor/:autor', (req, res) => {
    const autor = req.params.autor;
    const libros = biblioteca.buscarPorAutor(autor);
    if (libros.length === 0) {
        res.status(404).json({ error: 'No se encontró ningún libro de ese autor' });
    } else {
        res.json(libros.map(libro => libro.informacion()));
    }
});

// Listar libros disponibles
app.get('/api/libros/disponibles', (req, res) => {
    const disponibles = biblioteca.librosDisponibles();
    res.json(disponibles.map(libro => libro.informacion()));
});

// Listar autores disponibles en la biblioteca
app.get('/api/autores', (req, res) => {
    const autores = biblioteca.autores();
    res.json(autores);
});

module.exports = app;
