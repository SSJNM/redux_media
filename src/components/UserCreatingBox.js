import React from 'react'

function UserCreatingBox({userInput}) {
  return (
    <div className='mr-2'><input type='text' value={userInput} onChange={inputHandler} placeholder='Add User Name'className='border-2 border-black mr-2'/><button onClick={addUserHandler}>Create</button></div>
  )
}

export default UserCreatingBox