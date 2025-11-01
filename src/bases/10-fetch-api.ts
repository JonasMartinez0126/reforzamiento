import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = import.meta.env.VITE_API_KEY;

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`);

const createImageInsideDOM  = (url: string ) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;
    document.body.appendChild(imgElement);
}

myRequest
    .then( response => response.json() )
    .then( ({ data } : GiphyRandomResponse) => {
        /* const imageUrl = data.data.images.original.url;
        console.log(imageUrl);

        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;

        document.body.appendChild(imgElement); */

        const imageUrl = data.images.original.url;
        createImageInsideDOM( imageUrl );
    } )
    .catch( error => {
        console.error(error);
    });