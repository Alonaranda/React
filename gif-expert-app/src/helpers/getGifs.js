  //Funcion que se comunica con API
  export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=FLetpOxK5FfMLtWxKhdqokjdyB3URp7m`;
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();
    //console.log(data);

    const gifs = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
      };
    });
    //console.log(gifs);
    //setImages(gifs);
    return gifs;
  };