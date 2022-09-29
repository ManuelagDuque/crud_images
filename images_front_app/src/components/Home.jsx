import React from 'react';
import useImagesAPI from '../hooks/useImagesAPI';

function Home() {
    let url = 'http://127.0.0.1:8000/image' 
    let {data} = useImagesAPI(url)
    console.log(data)
    return (
    <div>
        <h1>Images Repository</h1>
    </div>
  )
}

export default Home;