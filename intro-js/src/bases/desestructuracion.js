

//Destructuracion de objetos o Asignacion desestructurtante 
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
//Expresiones que nos permiten desempacar valores de arreglos o objetos

const vengador = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    clave: 'IronMan'
}

console.log(vengador.clave);

const retornaVengador = (usuario) => {
    console.log(usuario);
}
retornaVengador(vengador);


//Se declaran variables const con valores especificos de las propiedades del objeto
const {nombre:nombreVengador, edad:edadVengador} = vengador;
console.log(nombreVengador);
console.log(edadVengador);


//Obtener ciertos valores
const valoresVengador = ({clave, rango = 'Lider'}) => {
    console.log(clave, rango);
}
valoresVengador(vengador);


const masValores = ({clave, edad}) => {
    return {
        nombreClave: clave,
        anios: edad,
        latLng:{
            lat:14.1234,
            lng: -12.2345
        }
    }
}

const {nombreClave, anios, latLng: {lat, lng}} = masValores(vengador);
console.log(nombreClave, anios);
console.log(lat);
console.log(lng);




//Desestructuracion de Arreglos 
const personajes = ['Goku', 'Vegeta', 'Picoro', 'Trunks'];
console.log(personajes);
console.log(personajes[3]);

const [p1] = personajes;
const [,p2] = personajes;
const [,,p3] = personajes;
console.log(p1);
console.log(p2);
console.log(p3);

const retornaArreglo = () => {
    return ['ABCD', 1234];
}
const arr = retornaArreglo();
console.log(arr);
const [letras, numero] = retornaArreglo();
console.log(letras);
console.log(numero);



const userState = (valor) => {
    return [valor, ()=> {console.log('Hola mundo')}];
}

//const arrUseState = useState('Goku');
//console.log(arrUseState);

const[nombrearr, setNombrearr] = userState('Krilin');
console.log(nombrearr);
setNombrearr();