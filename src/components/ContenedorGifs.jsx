export const ContenedorGifs = ({gifs, nombreCategoria}) => {

    return (
          <>
          <h1>{nombreCategoria}</h1>
          <div className="d-flex flex-row justify-content-center alig-items-center row row-cols-2 row-cols-lg- g-2 g-lg-3 mt-2">
              {gifs.map(({id, title, url})=>{
                  return (
                      <img key={id} className="w-25 m-5" src={url} alt="image"/>
                  )
              })}
          </div>  
          </>
      )
  }