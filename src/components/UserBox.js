import React, { useState } from 'react'
import { GoTrash, GoSync } from 'react-icons/go'
import { deleteUser } from '../store';
import { useDispatch } from 'react-redux';

function UserBox({user}) {
    const dispatch = useDispatch()
    const [albumView,setalbumView] = useState(false); 
    
    const [isDeletingUser,setIsDeletingUser] = useState(false);
    const [errorDeletingUser,setErrorIsDeletingUser] = useState(null);

    const handleDeleteClick = () => {
        setIsDeletingUser(true);
        dispatch(deleteUser(user.id)).unwrap().catch((err) => {
            setErrorIsDeletingUser(err);
        }).finally(() => {
            setIsDeletingUser(false);
        })
    }

    const clickHandler = (event) => {
        if(albumView)
        setalbumView(false)
        else
        setalbumView(true)
    }
    return (
        <div key={user.id}>
        <div className='flex justify-between box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 mb-2' >
            <div>
            <button onClick={handleDeleteClick} className='mr-2'>
            {isDeletingUser ? <GoSync/> : <GoTrash /> }
            </button>
            {errorDeletingUser && <div>Error Deleting User</div> }
            {user.name}
            </div>
            <button onClick={clickHandler}>{albumView ? "Close" : "Open"}</button>
        </div>
        <div>
            {albumView ? <div> This is info regarding albums</div> : null}
        </div>
        </div>
  )
}

export default UserBox