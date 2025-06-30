import React, { useState } from 'react'

export default function ChangeColorCar() {
    const [isColor, setIsColor] = useState("black");
    const changeColor = () => {
        if(isColor == "black") {
            return (
                <img src="./images/black-car.jpg" width={300} alt="" />
            )
        }else if(isColor == "red") {
            return (
                <img src="./images/red-car.jpg" width={300} alt="" />
            )
        }else if(isColor == "silver") {
            return (
                <img src="./images/silver-car.jpg" width={300} alt="" />
            )
        }
    }

    const handleColor = (color) => {
        setIsColor(color);
    }

    return (
        <div>
            <h1 className="text-8xl">Change color car</h1>
            <div>
                <div>
                    {changeColor()}
                </div>
                <div>
                    <button onClick={() => handleColor("black")}>Black</button>
                    <button onClick={() => handleColor("red")}>Red</button>
                    <button onClick={() => handleColor("silver")}>Silver</button>
                </div>
            </div>
        </div>
    )
}
