import React, { useEffect, useState } from 'react'
import '../screens/style/Account.css'
import Nav from '../components/Nav'
import {UserAuth} from '../context/AuthContext'
import SavedShows from '../components/savedShows'
import { db } from '../firebase';
import { onSnapshot, doc } from 'firebase/firestore'

function Account() {

    const {user} = UserAuth();
    const [name, setName] = useState('');

    useEffect(() =>{
        onSnapshot(doc(db, 'userLogin', `${user?.email}`),(doc) => {
            setName(doc.data()?.userName)
        })
    }, [user?.email])

    user.displayName = name;
    return (
    <>    
        <Nav/>
        <div className="loginScreen">
            <div className="loginScreen_upper">   
                <h1 className='User_fav'>{`My Shows`}</h1>
                <text className='User_id'>{name}</text>
                <div className='loginScreen_gradient'/>
            </div>
        </div>
        <div className='savedShows'>
            <SavedShows/>
        </div>
    </>
    );
}

export default Account