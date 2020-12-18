import  React, { useState, useEffect } from 'react';
import axios from 'axios';
const API_KEY = process.env.REACT_APP_API_KEY;  
const Random = () => {
    const [gif, setGif] = useState(''); 
    const [tag, setTag] = useState('dogs');

    const fetchGif = async (tag) => {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
        const { data } = await axios.get(url);
        const imageSrc = data.data.images.downsized_large.url;
        setGif(imageSrc);
    }
    useEffect(() => {
            fetchGif(tag);
    },[tag]);

    const handleClick = () => {
        fetchGif(tag);
    }

    return(
       <div className="container">
            <h1>{tag} GIFS</h1>
           <img height="450" width="450" src={gif} alt= "Random Gif" /> 
           <input type="text" placeholder="Search for a gif"  value={tag} onChange ={(e) => setTag(e.target.value)}/>
           <button type="reset" onClick={handleClick}>NEW GIF</button>
       </div>
    );
          

}
export default Random;

