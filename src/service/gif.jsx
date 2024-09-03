const api_key = 'YHWxYmHKdTgoseAcl8SsSIfwdT9zClQl'
const limit = 5
export const reqGif = async (categoria) =>{
    try {
        const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${categoria}&limit=${limit}`)
        const { data } = await resp.json()
        const gifs = data.map((gif)=> ({
            id: gif.id,
            title: gif.title, 
            url: gif.images.downsized_medium.url
        }))
        
        return gifs
    } catch (err) {
        console.error(err)
    }
}