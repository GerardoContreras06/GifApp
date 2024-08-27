import { useState } from "react"

//functional component
export const GifApp = () => {
    
    return(
        //fragment
    <>
        <div className="d-flex flex-row justify-content-center alig-items-center mt-3">
            <button onClick={handleGetGif} className="btn btn-outline-success">Generar Gif</button>
        </div>   
        <div className="d-flex flex-row justify-content-center alig-items-center">
            <img className="w-50 m-5" src={gif} alt="image"/>
        </div>  
    </>
    )
}