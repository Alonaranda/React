
import { getHeroeByID } from "./bases/importExport";
import { heroes } from "./data/heroes";

//Promesas en JS, https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise
//Son asincronas
//Resolve y Reject son callbacks
/*
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const heroe = getHeroeByID(2);
        console.log(heroe);
        resolve(heroe);
        reject('No se puedo encontrar el heroe');
    },2000);
});

promesa.then((heroe)=>{
    console.log(`Then = Promesa cumplida ${heroe}`)
}).catch(err => {
    console.log('Error' + err);
})*/


//Regresa void
const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeByID(id);
            //console.log(heroe);

            if(heroes.find((heroe)=> heroe.id === id)){
                resolve(heroe);
            }else{
                reject('No se puedo encontrar el heroe');
            }
            
            
        },2000);
    });
}
getHeroeByIdAsync(10).then((heroe) => {
    console.log('Heroe: ', heroe);
}).catch((error) => {
    console.warn('Error: ' + error);
});