import React, { useState } from 'react'
import './css/styles.css'
import Item from './item'
import ListItem from './listItem'
import dataGlasses from './dataGlasses.json'

export default function Glasses() {
  const [listGlasses, setListGlasses] = useState(dataGlasses);
  const [glassesDetail, setGlassesDetail] = useState(listGlasses[0]);
  const renderListGlasses = () => {
    return listGlasses.map((glasses) => {
      return <ListItem key={glasses.id} glasses={glasses} getGlasses={handleGetGlasses} />
    })
  }
  const handleGetGlasses = (glasses) => {
    setGlassesDetail(glasses);
  }
  return (
    <div>
        <div className='container bg-amber-50 ml-auto mr-auto p-10'>
          <Item glassesDetail={glassesDetail} />
          <div className="list-glasses grid grid-cols-6 gap-30 mx-auto bg-white p-10">
            {renderListGlasses()}
          </div>
        </div>
    </div>
  )
}
