import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFecthGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getImages = async() => {
        const images = await getGifs(category);
        setImages(images);
        setLoading(false);
    }

    useEffect( () => {
        getImages();
    },[]);

    return {
        images,
        isLoading
    }
}