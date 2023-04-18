export const getGifs = async(category) =>{


    const ApiKey = 'ANNQzEZdHz2pKMhc1QID95XuPpH5bLOu'
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${ ApiKey }&q=${ category }&limit=8`
    const resp= await fetch ( url );
    const { data } = await resp.json()
    const gifs = data.map( img => { 

        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
        
    })
    return gifs;
}