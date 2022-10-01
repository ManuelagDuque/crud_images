import React from 'react';
import useImagesAPI from '../hooks/useImagesAPI';
import {TrashIcon, PencilIcon, StarIcon} from '@primer/octicons-react'

function Home() {
    let url = 'http://127.0.0.1:8000/image' 
    let {data} = useImagesAPI(url)
    console.log(data)
    return (
    <div className="ms-4 me-4 mt-5 mb-5 body-container">
        <h1>Images Repository</h1>
        <div className="mt-5 mb-5 d-flex justify-content-center">
          <button type="submit" className="btn btn-success">Add Image</button>
        </div>
        <div className="card-container d-flex p-2 justify-content-around flex-wrap">
          {
            data.map(image =>(
              <div key={image.id} className="card card-style di-flex align-items-center mb-5">
                <div className='card-image-container mt-3 mb-1'>
                  <img src={image.image} className="card-img-top card-image" alt={image.name}/>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-around">
                    <div className="card-buttons d-flex justify-content-start punctuation-icon">
                      <StarIcon size={30} fill="#ffca00" />
                    </div>
                    <div className="card-buttons d-flex justify-content-around management-icon">
                      <PencilIcon size={30} fill="#0077fd" />
                      <TrashIcon size={30} fill="#CB3234" />
                    </div>
                  </div>
                  <h5 className="card-title mt-4">{image.name}</h5>
                </div>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default Home;