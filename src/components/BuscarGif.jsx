import { useState } from "react"

export const BuscarGif = ({handleGetGif}) => {

    const [categoria, setCategoria] = useState('')

  return (
    <>
    <div className="d-flex flex-row justify-content-center alig-items-center mt-3">
        <form className='d-flex' onSubmit={ (e)=> { handleGetGif(e, categoria)}}>
            <input type="text" className='form-control me-2' onChange={ (e)=>{ setCategoria(e.target.value)}}/>
            <input type="submit" value="Buscar" className='btn btn-outline-success'/>
        </form>
    </div>
    </>
  )
}