class Autor {
    constructor(nombre, nacionalidad) {
      this.nombre = nombre;
      this.nacionalidad = nacionalidad;
    }
  
    informacion() {
      return `Nombre: ${this.nombre}, Nacionalidad: ${this.nacionalidad}`;
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
      const disponibilidadStr = this.disponibilidad
        ? "Disponible"
        : "No disponible";
      return `Título: ${this.titulo}, Autor: ${this.autor.nombre}, Año de publicación: ${this.anioPublicacion}, Estado: ${disponibilidadStr}`;
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
      return this.libros.map((libro) => libro.autor);
    }
  }
  
  module.exports = { Autor, Libro, Biblioteca };
  