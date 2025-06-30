import React, { useState } from 'react'

export default function Child(props) {
    const handleResetUSer = () => {
        const userReset = 'Phước';
        props.handleGetUserReset(userReset);
    }
  return (
    <div className='border w-1/2 bg-amber-200'>
        <h1>Child</h1>
        <p>Username: {props.user} - Age: {props.age}</p>
        <button type='button' onClick={handleResetUSer} className='text-white bg-red-700 w-[300px]'>Reset</button>
    </div>
  )
}
