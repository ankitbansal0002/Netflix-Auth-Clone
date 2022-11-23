import React, { useState } from 'react'
import {UserMovie} from './Row'
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import '../components/style/Row.css'
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase'
import { arrayUnion, updateDoc, doc } from 'firebase/firestore';


const base_url = "https://image.tmdb.org/t/p/original"


const Movie = ({pass , isLarge}) => {
    const [like, setLike] = useState(false);
    const [saved , setSaved] = useState(false);
    const { handleClick } = UserMovie();
    const { user } = UserAuth();

    const movieID = doc(db, 'userLogin', `${user?.email}`);

    const handleSubmit = (e) => {
        try {
            handleClick(e);
            console.log(e);
        } catch (e) {
            console.log(e.message);
        }
    };

    // here we are updating our databse or adding the data to database
    const savedShow = async () => {
        if(user?.email){
            setLike(!like);
            setSaved(true);
            
            await updateDoc(movieID, {
                savedShows: arrayUnion({
                    id : pass.id,
                    title: pass.title,
                    img: pass.poster_path
                }),
                likeStatus: arrayUnion({
                    likeStatus: like,
                    id : pass.id,
                    title: pass.title
                })
            })
        }else{
            alert("Please Login to move further")
        }
    }

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
                        savedShow();
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
