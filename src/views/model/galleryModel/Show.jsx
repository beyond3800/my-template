import React from 'react'
import { UseGalleryContext } from '../../../contexts/GalleryContext'

export const Show = ({ data }) => {
    const { setModelData } = UseGalleryContext();
    const handleClick = (e) => {

        setModelData((prev) => {
            return {
                ...prev,
                curr: { img: e.target.alt, id: e.target.dataset.id,title: e.target.title }
            }
        })
    }
  return (
        <div className='w-36 h-36 rounded-lg shadow shadow-[#313131] cursor-pointer transition hover:scale-105' data-id={ data.id}>
          <img src={`images/${data.img}`} alt={data.img} className='w-full h-full rounded-lg' title={data.name} data-id={ data.id} onClick={(e)=>handleClick(e)}/>
        </div>
    )
}
