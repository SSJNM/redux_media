import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector} from 'react-redux'
import { fetchUsers } from '../store'
import Skeleton from './Skeleton'
import UserBox from './UserBox'
import { createUser } from '../store'


function UsersList() {

    const [userInput,changeUserInput] = useState('') 
    const [isLoadingUser,setIsLoadingUser] = useState(false)
    const [loadingUserError,setLoadingUserError] = useState(null)
    const [isCreatingUser,setIsCreatingUser] = useState(false)
    const [creatingUserError,setCreatingUserError] = useState(null)

    const dispatch = useDispatch()
    const {data} = useSelector((state)=> state.users)

    // console.log(isLoading,users,error)
    const renderedUsers = data.map((user,idx)=> {
        return <div key={user.id}><UserBox user={user}/></div>;
    })

    const inputHandler = (event) => {
        changeUserInput(event.target.value)
    }

    const addUserHandler = () => {
      setIsCreatingUser(true)
      dispatch(createUser(userInput)).unwrap()
      .catch((err) => {
          setCreatingUserError(err);
      }).finally(() => {
        setIsCreatingUser(false)
      })
      changeUserInput('')
    }


    useEffect(() => {
      setIsLoadingUser(true);
      dispatch(fetchUsers()).unwrap().then(() => {
        setIsLoadingUser(false);
      }
      ).catch((err) => {
        setIsLoadingUser(false);
        setLoadingUserError(err)
      });
    },[dispatch])

    if(isLoadingUser){
      return <Skeleton boxcount={5} className="h-5 w-full" />
    }
    

    if(loadingUserError){
      return <div>{loadingUserError}</div>
    }

    const userErrorCheck = creatingUserError ? <>{creatingUserError}</> : <>Creating User</>

    return (
      <>
      <div className='flex justify-between'>
        List of Users
        <div className='mr-2'>
          <input type='text' value={userInput} onChange={inputHandler} placeholder='Add User Name'className='border-2 border-black mr-2'/>
          {isCreatingUser ? userErrorCheck : <button onClick={addUserHandler}>Create</button>}
        </div>
      </div>
      {isLoadingUser ?  <Skeleton boxcount={15} className="h-5 w-full" /> : <div>{renderedUsers}</div>}
      </>
    )
}

export default UsersList