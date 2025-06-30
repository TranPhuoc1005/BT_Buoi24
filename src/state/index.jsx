import React from 'react'
import { useState } from 'react';

export default function State() {
    const [isLogin, setIsLogin] = useState(false);
    let username = "Phuoc";

    const handleLogin = () => {
        setIsLogin(true);
    }

    const handleLogout = () => {
        setIsLogin(false);
    }

    console.log(isLogin)
    const renderInfo = () => {
        if(!isLogin) {
            return (<div>
                <h1>Vui lòng login</h1>
                <button onClick={handleLogin}>Login</button>
            </div>);
        }else {
            return (<div>
                <h1>Hello {username}</h1>
                <button onClick={handleLogout}>Logout</button>
            </div>);
        }
    }


    
  return (
    <div>
        <h1>State</h1>
        {renderInfo()}
    </div>

  )
}
