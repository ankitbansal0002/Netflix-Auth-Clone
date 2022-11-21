import React, { useState } from 'react'
import {UserMovie} from './Row'
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import '../components/style/Row.css'

const base_url = "https://image.tmdb.org/t/p/original"


const Movie = ({pass , isLarge}) => {
    const [like, setLike] = useState(false);
    const { handleClick } = UserMovie();


    const handleSubmit = (e) => {
        try {
            handleClick(e);
            console.log(e);
        } catch (e) {
            console.log(e.message);
        }
    };

    return (
            <div className='row_poster_scroll'>
                <img
                    key={pass.id}
                    onClick={() => {handleSubmit(pass)}}
                    className={`row_poster ${isLarge && "row_posterLarge"}`}
                    src={`${base_url}${isLarge ? pass.poster_path : pass.backdrop_path}`}
                    alt={pass.name} 
                    />
                <p  
                    onClick={() => {
                        if(like == false){
                        setLike(true)
                    }else{
                        setLike(false)
                    }}}
                    >
                    {like ? (
                        <FaHeart className='row_poster_fav'/>
                    ) : (
                        <FaRegHeart className='row_poster_fav' />
                    )}
                </p>  
            </div>  
    );
}

export default Movie
