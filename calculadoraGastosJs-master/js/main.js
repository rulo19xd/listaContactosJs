//Creamos un array para gurdar los contactos
const contactos = [];

//Clase constructora para los contactos
class Contacto {
    constructor(nombre, telefono, pais) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.pais = pais;
    }
}
//Funcion para agregar contactos al array
function agregarContacto() {
    const nombre = prompt('Ingrese el nombre del contacto:');
    const telefono = prompt('Ingrese el número de teléfono del contacto:');
    const pais = prompt('Ingrese el pais del contacto:');

    if (nombre && telefono && pais) {
        const nuevoContacto = new Contacto(nombre, telefono, pais);
        contactos.push(nuevoContacto);
        console.log('Contacto agregado con éxito:');
        console.log(nuevoContacto);
    } else {
        console.log('Entrada inválida. Asegúrate de ingresar valores válidos.');
    }
}
//Funcion para buscar telefonos
function buscarContactoPorTelefono(telefono) {
    return contactos.find(contacto => contacto.telefono.toLowerCase() === telefono.toLowerCase());
}
//Funcion para filtrar por pais
function filtrarContactosPorPais(pais) {
    return contactos.filter(contacto => contacto.pais.toLowerCase().includes(pais.toLowerCase()));
    
}

//Bucle para ingresar contactos
let agregarMasContactos = true;
while (agregarMasContactos) {
    agregarContacto();
    let respuesta = confirm('¿Desea agregar otro contacto?');
    agregarMasContactos = respuesta;
}
//Bucle para filtrar contactos
let filt = confirm('¿Desea buscar algún contacto?');
while (filt) {
    let filtro = prompt('Ingrese el pais del contacto');
    let contactoFiltrado = filtrarContactosPorPais(filtro);
    if (contactoFiltrado.length > 0) {
    contactoFiltrado.forEach(contacto => { //recorremos el array creado con la funcion filtrar y   -->
    console.log(`Nombre: ${contacto.nombre}, Teléfono: ${contacto.telefono}, País: ${contacto.pais}`); // lo mostramos por consola
    }); 
} else {
    console.log('No se encontraron contactos para el país seleccionado.');
}
filt = confirm('¿Desea filtrar sus contactos por país de nuevo?');
}
//Bucle para buscar telefonos
let busc = confirm('¿Desea buscar un número de telefono?');
while (busc) {
    let buscar = prompt('Ingrese el telefono del contacto');
    let contactoEncontrado = buscarContactoPorTelefono(buscar);
    if (contactoEncontrado.length > 0) {
    contactoEncontrado.forEach(contacto => {
        console.log(`Nombre: ${contacto.nombre}, Teléfono: ${contacto.telefono}, País: ${contacto.pais}`);
    })
    } else {
        console.log('No se encontraron contactos con el telefono seleccionado.');
    }
} 