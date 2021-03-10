//Async
const getImagenPromesa = () => new Promise(resolve => resolve('https.google1.com'));
getImagenPromesa().then(console.log);
//Al poner asycn deja de ser una funcion y se convierte en promesa
const getImagen = async() => {
    return 'https.google2.com'
}
getImagen().then(console.log);


//Async y Await
//Await nos ayuda a trabajar como si todo fuera sincrono
//Me espero a que termine await para continuar con la siguiente linea
const getDatos = async() => {

    try {
        const apiKey = 'FLetpOxK5FfMLtWxKhdqokjdyB3URp7m';
        const respuesta = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const  data = await respuesta.json();
        console.log(data);
        const url = data.data.images.original.url;
        const img  = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        console.log('Error: ' + error)
    }
}
getDatos();


