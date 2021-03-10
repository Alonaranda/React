//Fetch: https://developer.mozilla.org/es/docs/Web/API/Fetch_API
const apiKey = 'FLetpOxK5FfMLtWxKhdqokjdyB3URp7m';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

//Promesas en cadena
peticion
    .then((respuesta) => respuesta.json())
    .then(({data}) => {
        const {url} = data.images.original;
        const img  = document.createElement('img');
        img.src = url;
        document.body.append(img);
    })

    /*
    console.log(respuesta);
    respuesta.json().then((data) => {
        console.log(data);
    })*/
    .catch(console.warn);