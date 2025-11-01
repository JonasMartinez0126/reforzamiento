import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = import.meta.env.VITE_API_KEY;


const createImageInsideDOM  = (url: string ) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;
    document.body.appendChild(imgElement);
}

const getRamdomGiphUrl = async () => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`);
    //const data = (await response.json()) as GiphyRandomResponse;
    const { data } : GiphyRandomResponse = await response.json();

    return data.images.original.url;
}

/*getRamdomGiphUrl().then(
    (url) => {
        createImageInsideDOM(url)
    }
)*/
getRamdomGiphUrl().then(createImageInsideDOM);

/* myRequest
    .then( response => response.json() )
    .then( ({ data } : GiphyRandomResponse) => {
        const imageUrl = data.data.images.original.url;
        console.log(imageUrl);

        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;

        document.body.appendChild(imgElement);
    } )
    .catch( error => {
        console.error(error);
    }); */