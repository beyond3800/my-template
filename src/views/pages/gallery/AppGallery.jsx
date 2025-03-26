import React from 'react'
import {GalleryProvider, UseGalleryContext } from '../../../contexts/GalleryContext'
import Content from '../../../components/Content'
import Wrap from '../../../components/Wrap'
import Show from './Show'
import Gallery from './Gallery'

const AppGallery = () => {
    return (
      <GalleryProvider>
        <Gallery/>
      </GalleryProvider>

    )
}

export default AppGallery
