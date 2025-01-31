import React from 'react'
import './ImageGalerry.css'
import Image1 from '../utils/image1.jpg'
import Image2 from '../utils/image2.jpg'
import Image3 from '../utils/image3.jpg'
import Image4 from '../utils/image4.jpg'
import Image5 from '../utils/image5.jpg'
import Image6 from '../utils/image6.jpg'

const ImageGalerry = () => {
  return (
    <div className='container py-5'>
        <h2 className='text-center fs-1 mb-5 text uppercase fw-bold'>
            Image Gallery</h2>
        <div className='row'>
            <div className='col-md-4 px-2'>
                <div className='my-3 image-container'>
                    <img src={Image1} className='img-fluid gallery-img' alt='Restaurant Image 1'/>                     
                </div>
            </div>
            <div className='col-md-4 px-2'>
                <div className='my-3 image-container'>
                    <img src={Image2} className='img-fluid gallery-img' alt='Restaurant Image 2'/>                     
                </div>
            </div>
            <div className='col-md-4 px-2'>
                <div className='my-3 image-container'>
                    <img src={Image3} className='img-fluid gallery-img' alt='Restaurant Image 3'/>
                </div>
            </div>
            <div className='col-md-4 px-2'>
                <div className='my-3 image-container'>
                    <img src={Image4} className='img-fluid gallery-img' alt='Restaurant Image 4'/>                     
                </div>
            </div>
            <div className='col-md-4 px-2'>
                <div className='my-3 image-container'>
                    <img src={Image5} className='img-fluid gallery-img' alt='Restaurant Image 5'/>                     
                </div>
            </div>
            <div className='col-md-4 px-2'>
                <div className='my-3 image-container'>
                    <img src={Image6} className='img-fluid gallery-img' alt='Restaurant Image 6'/>                     
                </div>
            </div>
        </div>
    </div>
  )
}

export default ImageGalerry