import React from 'react'

export default function EventClick() {
    const HandleOnClick = () => {
        console.log("123");
    }
    const hangleonClickParams = (user, role) => {
        console.log(user, role);
    }
    return (
        <div>
            <h1>Event Click</h1>
            <button onClick={HandleOnClick}>On Click</button>
            <button onClick={() => hangleonClickParams("Phuoc","Amin")}>On Click Params</button>
        </div>
    )
}
