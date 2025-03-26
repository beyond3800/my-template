import React from 'react'
import {GalleryProvider, UseGalleryContext } from '../../../contexts/GalleryContext'
import Content from '../../../components/Content'
import Wrap from '../../../components/Wrap'
import Show from './Show'
import { GalleryModel } from '../../model/galleryModel/GalleryModel'

const Gallery = () => {
    const { cities, natures, handleModel, open } = UseGalleryContext();
    console.log(open)
    return (
        <GalleryProvider>
            <Content>
                <div className="">
                    <div className="city mb-10">
                        <header className=' font-Montserrat letter-spacing uppercase text-lg md:mb-4'> city</header>
                        <Wrap>
                            {cities.map(city => <Show key={city.id} data={ city } />)}
                        </Wrap>
                    </div>
                    <div className="nature mb-10">
                        <header className='font-Montserrat letter-spacing uppercase text-lg md:mb-4'> nature</header>
                        <Wrap>
                            {natures.map(nature => <Show key={nature.id} data={ nature } />)}
                        </Wrap>
                    </div>
                </div>
            </Content>
            {<GalleryModel />}
        </GalleryProvider>

  )
}

export default Gallery