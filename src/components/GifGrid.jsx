import { useEffect, useState } from "react";
import { useFecthGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";


export const GifGrid = ({category}) => {
    const { images, isLoading} = useFecthGifs(category);
    

    return (
        <>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            <h3>{category}</h3>
            <div className="card-grid">
                {
                    images.map( i => (
                            <GifItem
                            key={i.id}
                            {...i}
                            />
                        ))
                }
            </div>
        </>
    )
}