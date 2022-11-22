import React from 'react'
import '../screens/style/Account.css'
import Nav from '../components/Nav'
import {UserAuth} from '../context/AuthContext'
import SavedShows from '../components/savedShows'

function Account() {

    const {user} = UserAuth();
    return (
    <>    
        <Nav/>
        <div className="loginScreen">
            <div className="loginScreen_upper">   
                <h1 className='User_fav'>{`My Shows`}</h1>
                <text className='User_id'>{user?.email}</text>
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