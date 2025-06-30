import React from 'react'

export default function ListItem(props) {
    const {glasses, getGlasses} = props;
    const handleGetItem = () => {
        getGlasses(glasses);
    }
    return (
        <>
            <div className="item cursor-pointer hover:opacity-80" onClick={handleGetItem}><img src={glasses.url} alt="" /></div>
        </>
    )
}
