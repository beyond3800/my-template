import React from 'react'
import { UseGalleryContext } from '../../../contexts/GalleryContext'

const Show = ({ data }) => {
    const { handleModel, open, setModelData, cities,natures} = UseGalleryContext();
    const handleClick = (e) => {
        handleModel()
        if (data.category == 'city') {
            setTimeout(() => {
                setModelData({ data: cities, curr: { img: e.target.alt, id: e.target.dataset.id, title: e.target.title } });
            }, [1]);
        }
        else if (data.category == 'nature') {
            setTimeout(() => {
                setModelData({ data: natures, curr: { img: e.target.alt, id: e.target.dataset.id, title: e.target.title } });
            },[1])
        }
    }
  return (
        <div className='w-full h-48 md:w-52 md:h-36 rounded shadow shadow-[#999] cursor-pointer hover:scale-105' onClick={(e)=>handleClick(e)}>
          <img src={`images/${data.img}`} alt={data.img} className='w-full h-full rounded transition' title={data.name} data-id={ data.id } />
        </div>
    )
}

export default Show