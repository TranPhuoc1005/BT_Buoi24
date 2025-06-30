import React, { useState } from 'react'
import Child from './child'

export default function Communication() {
    const [user, setUser] = useState('Phước');
    const [age, setAge] = useState(18);
    const handleChangeUser = () => {
        setUser('Lọc')
    }
    const handleGetUserReset = (data) => {
        setUser(data);
    }
    return (
        <div>
            <h1>Communication</h1>
            <Child 
                user={user} 
                age={age}
                handleGetUserReset={handleGetUserReset}
            />
            <button onClick={handleChangeUser} type='button' className='text-white bg-blue-200 w-[300px]'>Nút</button>
        </div>
    )
}
