export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=yLJHNja3Nxb6f1DUnhxxEIv2Lpv6theQ&q=${category}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url
    }));

    // console.log(gifs);
    return gifs;
}