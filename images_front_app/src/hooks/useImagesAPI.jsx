import {useEffect, useState} from 'react';

function useImagesAPI(url) {
  /** Hook state*/
  const [data, setData] = useState([])
  
  /** Hook effect*/
  useEffect(() => {
    const apiData = async (url) => {
      let apiResponse = await fetch(url)
      let images = await apiResponse.json()
      setData(images)
    }
    apiData(url)
  }, [url])

  return {data}

}



export default useImagesAPI;