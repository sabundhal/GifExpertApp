import React from 'react'

export const GifGrid = ({category}) => {

    const getGifs = async (category) => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=Ca6344V3cg2yeIl90xWaFCalHffBCN4p`;
        const resp = await fetch(url);
        const {data} = await resp.json();
        
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        console.log(gifs);
    }
    getGifs(category);

  return (
    <div>
        <h3>{category}</h3>
    </div>
  )
}
