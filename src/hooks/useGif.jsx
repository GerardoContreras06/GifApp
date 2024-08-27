import { useState } from "react"

export const useGif = () => {

    const [gif, setGif] = useState('')

    const reqGif = async () =>{
        await fetch('http://YHWxYmHKdTgoseAcl8SsSIfwdT9zClQl').then(async(resp)=>{
            await resp.json().then(({data})=>{
                setGif(data.images.original.url)
            })
        }).catch(console.error)
    }

    const handleGetGif = () =>{
        reqGif()
    }

    return{
        handleGetGif,
        gif
    }
}