import React, { useEffect, useRef } from 'react'
import { UseGalleryContext } from '../../../contexts/GalleryContext';
import CustomBtn from '../../../components/button/CustomBtn';
import Scroll from '../../../components/Scroll';
import { Show } from './Show';


export const GalleryModel = ({ }) => {
  const { open, handleModel, modelDate, setModelData } = UseGalleryContext()
  const { data, curr } = modelDate;
  const modelRef = useRef(null);
  const modelbodyRef = useRef(null);
  const modelImgRef = useRef(null);
  if (!open) return null; 
  const closeModel = () => {
    handleModel()
    setModelData({data:[],curr:[]})
  }
  const currSelected = () => {
    if (modelbodyRef.current && modelImgRef) {
      const children = [...modelbodyRef.current.children]
      const id = modelImgRef.current.dataset.id
      children.forEach((each) => {
        each.classList.remove('selected')
        if (each.dataset.id == id) {
          each.classList.add('selected')
        }
      })
    }
  }
  const modalStyle = {
    backgroundImage: `url(/images/${curr.img})`, // Set the background image
    backgroundSize: 'cover', // Cover the entire modal
    backgroundPosition: 'center', // Center the image
    height: '100%', // Full height
    width: '100%',
  };
  setTimeout(() => {
    currSelected()
    // console.log(modelRef.current)   
  }, [1]);
    return (
      <div className=" absolute inset-0 z-50 bg-slate-900 bg-opacity-100 h-screen w-screen overflow-x-hidden" ref={modelRef}>
        <div className=" px-3">
          <header className=' text-center mt-1 font-serif letter-spacing uppercase text-lg'>{ curr.title}</header>
          <CustomBtn title={`X`} style={`float-end px-3 rounded-md border hover:bg-red-400 -mt-6 text-current opacity-100`} handleClick={closeModel}>X</CustomBtn>
        </div>
        <div className=" flex flex-col justify-center w-full h-full px-4 md:block">
          <div className="flex justify-center mt-4">
            <div className="w-[700px] h-[350px] border rounded-lg">
              <img src={`images/${curr.img}`} alt="" className='w-full h-full rounded-lg transition-all brightness-150' data-id={ curr.id} ref={modelImgRef} />
            </div> 
          </div>
          <div className=" flex justify-center">
            {data.length > 0 ? (
              <Scroll style={``} ref={modelbodyRef}> 
                  {data.map(datas => <Show key={datas.id} data={datas} />)}
              </Scroll>
            ) : (
              <p className="text-center mt-4">Loading data...</p>
            )}
          </div>
        </div>
      </div>
    );
}
