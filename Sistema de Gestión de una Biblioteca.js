//Estudiante: Kimberlyn Esther Peguero
//Matricula: 2-SISN-2-035

// Definición de Clases que se van a usar
class Autor {
    constructor(nombre, nacionalidad) {
        this.nombre = nombre;
        this.nacionalidad = nacionalidad;
    }

    informacion() {
        return `Autor: ${this.nombre}, Nacionalidad: ${this.nacionalidad}`;
    }
}

class Libro {
    constructor(titulo, autor, anioPublicacion, disponibilidad = true) {
        this.titulo = titulo;
        this.autor = autor; // Instancias creadas para la clase Autor
        this.anioPublicacion = anioPublicacion;
        this.disponibilidad = disponibilidad;
    }

    informacion() {
        const disponibilidadStr = this.disponibilidad ? "Disponible" : "No disponible";
        return `Título: ${this.titulo}, Autor: ${this.autor.nombre}, Año de publicación: ${this.anioPublicacion}, Estado: ${disponibilidadStr}`;
    }

    prestar() {
        if (this.disponibilidad) {
            this.disponibilidad = false;
            console.log(`${this.titulo} ha sido prestado.`);
        } else {
            console.log(`${this.titulo} no está disponible para préstamo.`);
        }
    }

    devolver() {
        this.disponibilidad = true;
        console.log(`${this.titulo} ha sido devuelto.`);
    }
}

class Biblioteca {
    constructor() {
        this.libros = [];
    }

    agregarLibro(libro) {
        this.libros.push(libro);
    }

    listarLibros() {
        this.libros.forEach(libro => {
            console.log(libro.informacion());
        });
    }

    buscarPorTitulo(titulo) {
        return this.libros.filter(libro => libro.titulo.toLowerCase() === titulo.toLowerCase());
    }

    buscarPorAutor(nombreAutor) {
        return this.libros.filter(libro => libro.autor.nombre.toLowerCase() === nombreAutor.toLowerCase());
    }

    librosDisponibles() {
        return this.libros.filter(libro => libro.disponibilidad);
    }
}
// Pruebas de mi Ssitema de Biblioteca
 
function main() {

    //Instacias creadas para mi clase Autor//
const autor1 = new Autor("Juan Bosch", "Dominicana");
const autor2 = new Autor("Salomé Ureña", "Dominicana");
const autor3 = new Autor("Manuel del Cabral", "Dominicana");
const autor4 = new Autor("Pedro Mir", "Dominicana");
const autor5 = new Autor("Frank Báez", "Dominicana");
const autor6 = new Autor("Nydia Lamarque", "Dominicana");

//Instancias creadas para mi clase Libro//
const libro1 = new Libro("El fuego de la vida", autor1, 1965);
const libro2 = new Libro("Poesías", autor2, 1885);
const libro3 = new Libro("Cuentos de la selva", autor3, 1940);
const libro4 = new Libro("La muerte de un perro", autor4, 1955);
const libro5 = new Libro("Cuentos completos", autor5, 2015);
const libro6 = new Libro("El corazón de la tierra", autor6, 2014);

//Crear Bilioteca//
const biblioteca = new Biblioteca();
    
//Libros agregados a la instacia Bilioteca//
    biblioteca.agregarLibro(libro1);
    biblioteca.agregarLibro(libro2);
    biblioteca.agregarLibro(libro3);
    biblioteca.agregarLibro(libro4);
    biblioteca.agregarLibro(libro5);
    biblioteca.agregarLibro(libro6);

    // Listar todos los libros en mi Bliboteca//
    console.log("Lista de libros en la biblioteca:");
    biblioteca.listarLibros();

    // Busqueda de mis libros por título//
    biblioteca.buscarPorTitulo("Poesías");

    // Buscar libros por autor en mi Bilioteca//
    biblioteca.buscarPorAutor("Juan Bosch");

    // Mostrar libros disponibles en mi Bilioteca//
    biblioteca.librosDisponibles();

    // Prestar un libro y verificar disponibilidad en la Biblioteca//
    libro1.prestar();
    biblioteca.librosDisponibles();

    // Devolver un libro y verificar disponibilidad de que se encuentre en la Biblioteca//
    libro1.devolver();
    biblioteca.librosDisponibles();

// Ejecutar la prueba de mi programa//
main() }

