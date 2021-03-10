//Variables y constantes

//No usar var
const nombre = 'Christian';
let apellido = 'Alonso';
let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado);
if(true){//Scope
    const nombre = 'Fernando';
    let valorDado = 6;
    console.log(nombre, valorDado);
}
console.log(nombre, apellido, valorDado);

//Template string ``
console.log(`Mi nombre es ${nombre} y mi apellido es ${apellido}`);
function getSaludo(){
    return 'Soy una funcion';
}
console.log(`Llamando a la funcion: ${getSaludo()}`);

//Objetos literal 
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 12345,
        lat: 14.2,
        lng: 12.2
    }
};
console.log(persona);
console.log({persona});//Crea un objeto del objeto
console.table(persona);
const persona2 = {...persona};//Crea una copia del objeto
console.log(persona2);
//Paso por referencia -> Se pasa un copia
//Paso por valor -> Se pasa el original




//Arreglos
//Coleccion de informacion
//const arreglo = new Array(5);//Solo usarlo cuando se tiene el tamaño especifico, no pone candado, mejor []

//Documentacion map -> https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map
/*Map crea un nuevo array con los resultados de la llamada a la funcion indicada
var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function(x) {
   return x * 2;
});
// doubles is now [2, 10, 20, 30]
// numbers is still [1, 5, 10, 15]*/

const arreglo = [1,2,3,4];
arreglo.push(1);
arreglo.push(2);

let arreglo2 = [...arreglo, 5];

const arreglo3 = arreglo2.map(function(numero){
    return numero * 2;
});


console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);




//Funciones
function saludar(nombre){
    return `Hola, ${nombre}`;
}
console.log(saludar('Goku'));

//Mejor forma
const saludo = function(name){
    return `Hola, ${name}`;
}
console.log(saludo('Vegeta'));

//Flecha
const saludar2 = (nombre2) => {
    return `Hola ${nombre2}`;
}
console.log(saludar2);
console.log(saludar2('Pikoro'));

const getUser = () =>{
    return {
        uid: 'ABC123',
        username: 'Krozz18'
    }
}

const getInfo = () => ({
    id: '123',
    name: 'ABC'
});

console.log(getUser());
console.log(getInfo());

function getUsuarioActivo(nombre){
    return{
        uid: '1234567',
        username: nombre
    }
};
const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);


const userActivate = (name) => ({
    uid: '87654321',
    username: name
});
const userActi = userActivate('Chris');
console.log(userActi);
