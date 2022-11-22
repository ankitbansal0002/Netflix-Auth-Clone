import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import './style/savedShows.css'

const SavedShows = () => {
  const [movies, setMovies] = useState([]);
  const [like, setLike] = useState([]);
  const { user } = UserAuth();


  // How to read the data from firestore
  useEffect(() => {
    onSnapshot(doc(db, 'userLogin', `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
      setLike(doc.data()?.likeStatus)
    //   console.log(movies);
    });
  }, [user?.email]);

    // delete/update data from firestore
  const movieRef = doc(db, 'userLogin' , `${user?.email}`);
  const deleteShow = async (passedID) => {
      try {
        const result = movies.filter((item) => item.id !== passedID)
        await updateDoc(movieRef, {
            savedShows: result,
            emailAddress: `${user?.email}`
        })
      } catch (error) {
          console.log(error)
      }
  }

  console.log(movies)
  


  return (
    <div className='fav'>
      <h2 className='heading'>My Shows</h2>
        <div className='fav_section'>
          {movies?.map((item) => (
          <div className='movie_fav'>
            <img
            className='movie_fav_img'
            src = {`https://image.tmdb.org/t/p/w500/${item?.img}`}
            />
            <p 
            className='movie_fav_remove'
            onClick={()=> deleteShow(item.id)}><AiOutlineClose /></p>
          </div>  
           ))}
        </div>
    </div>
  );
};

export default SavedShows;

