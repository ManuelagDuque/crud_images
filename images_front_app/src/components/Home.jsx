import React from 'react';
import useImagesAPI from '../hooks/useImagesAPI';

function Home() {
    let url = 'http://127.0.0.1:8000/image' 
    let {data} = useImagesAPI(url)
    console.log(data)
    return (
    <div className="ms-4 me-4 mt-5 mb-5 border body-container">
        <h1>Images Repository</h1>
        <div className="border">
        <button type="submit" className="btn btn-success">Create</button>
        </div>
        <div className="border card-container d-flex p-2 justify-content-around">
          {
            data.map(image =>(
              <div key={image.id} className="card card-style border di-flex justify con">
                <div className='card-image-container'>
                  <img src={image.image} className="card-img-top card-image" alt={image.name}/>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{image.name}</h5>
                  <div class="mb-3 form-check">
                    <input type="checkbox" className="bi bi-star" id="exampleCheck1"/>
                  </div>
                  <button type="submit" className="btn btn-primary">Edit</button>
                  <button type="submit" className="btn btn-danger">Delete</button>
                </div>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default Home;