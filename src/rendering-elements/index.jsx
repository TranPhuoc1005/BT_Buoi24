import React from 'react'

export default function RenderingElements() {
    let message = "Hello World";
    let username = "Phuoc";
    let age = 18;
    const news = () => {
        return (
            <div>
                <h1>Tiêu đề</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam libero perspiciatis suscipit, deserunt distinctio rerum, laborum ipsum quibusdam autem, cum esse rem sit necessitatibus quo adipisci beatae eius veniam totam?</p>
            </div>
        )
    }
  return (
    <div>
        <div>{message}</div>
        <div>{username}</div>
        <div>{age}</div>
        {news()}
    </div>
  )
}
