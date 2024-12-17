class Autor {
    constructor(nombre, nacionalidad) {
        this.nombre = nombre;
        this.nacionalidad = nacionalidad;
    }

    informacion() {
        return { nombre: this.nombre, nacionalidad: this.nacionalidad };
    }
}

class Libro {
    constructor(titulo, autor, anioPublicacion, disponibilidad = true) {
        this.titulo = titulo;
        this.autor = autor;
        this.anioPublicacion = anioPublicacion;
        this.disponibilidad = disponibilidad;
    }

    informacion() {
        return {
            titulo: this.titulo,
            autor: this.autor.informacion(),
            anioPublicacion: this.anioPublicacion,
            disponibilidad: this.disponibilidad ? "Disponible" : "No disponible"
        };
    }
}

class Biblioteca {
    constructor() {
        this.libros = [];
        this.cargarDatosIniciales();
    }

    cargarDatosIniciales() {
        const autores = [
            new Autor("Juan Bosch", "Dominicana"),
            new Autor("Pedro Mir", "Dominicana"),
            new Autor("Salomé Ureña", "Dominicana"),
            new Autor("Manuel del Cabral", "Dominicana"),
            new Autor("Marcio Veloz Maggiolo", "Dominicana"),
            new Autor("Aída Cartagena Portalatín", "Dominicana"),
            new Autor("Hilma Contreras", "Dominicana"),
            new Autor("Carmen Natalia", "Dominicana"),
            new Autor("Franklin Mieses Burgos", "Dominicana"),
            new Autor("Freddy Gatón Arce", "Dominicana"),
            new Autor("Héctor Incháustegui Cabral", "Dominicana"),
            new Autor("José Joaquín Pérez", "Dominicana"),
            new Autor("Virgilio Díaz Grullón", "Dominicana"),
            new Autor("Bruno Rosario Candelier", "Dominicana"),
            new Autor("Rafael Damirón", "Dominicana"),
            new Autor("Jeannette Miller", "Dominicana"),
            new Autor("Tony Raful", "Dominicana"),
            new Autor("Antonio Lockward Artiles", "Dominicana"),
            new Autor("René del Risco Bermúdez", "Dominicana"),
            new Autor("Juan Isidro Jimenes Grullón", "Dominicana")
        ];

        const libros = [
            new Libro("Cuentos Escritos en el Exilio", autores[0], 1962),
            new Libro("La Mañosa", autores[0], 1936),
            new Libro("Hay un país en el mundo", autores[1], 1949),
            new Libro("Ruinas", autores[2], 1876),
            new Libro("Compadre Mon", autores[3], 1943),
            new Libro("De abril en adelante", autores[4], 1975),
            new Libro("Escalera para Electra", autores[5], 1955),
            new Libro("Cuentos de la vida sencilla", autores[6], 1950),
            new Libro("La Victoria", autores[7], 1941),
            new Libro("El libro de la creación", autores[8], 1936),
            new Libro("Guerrillero de las sombras", autores[9], 1965),
            new Libro("Panorama poético dominicano", autores[10], 1941),
            new Libro("Fantasías indígenas", autores[11], 1860),
            new Libro("Un día cualquiera", autores[12], 1972),
            new Libro("El viento frío", autores[13], 1967),
            new Libro("La misión de los caminantes", autores[14], 1938),
            new Libro("El retorno de los elefantes", autores[15], 1970),
            new Libro("Rumbo al puerto soñador", autores[16], 1983),
            new Libro("Los huéspedes secretos", autores[17], 1961),
            new Libro("Ahora que vuelvo, Ton", autores[18], 1967),
            new Libro("La ciudad romántica", autores[19], 1939)
        ];

        this.libros.push(...libros);
    }

    agregarLibro(libro) {
        this.libros.push(libro);
    }

    listarLibros() {
        return this.libros.map((libro) => libro.informacion());
    }

    buscarPorTitulo(titulo) {
        return this.libros.filter(
            (libro) => libro.titulo.toLowerCase() === titulo.toLowerCase()
        );
    }

    buscarPorAutor(nombreAutor) {
        return this.libros.filter(
            (libro) => libro.autor.nombre.toLowerCase() === nombreAutor.toLowerCase()
        );
    }

    librosDisponibles() {
        return this.libros.filter((libro) => libro.disponibilidad);
    }

    autores() {
        const autoresUnicos = new Map();
        this.libros.forEach((libro) => {
            if (!autoresUnicos.has(libro.autor.nombre)) {
                autoresUnicos.set(libro.autor.nombre, libro.autor.informacion());
            }
        });
        return Array.from(autoresUnicos.values());
    }
}

module.exports = { Autor, Libro, Biblioteca };
