import {useEffect, useState} from 'react';

function useImagesAPI() {
  /** Hook state*/
  const [data, setData] = useState([])
  
  /** Hook effect*/
  useEffect(() => {
    const apiData = async () => {
      let apiResponse = await fetch()
      let images = await apiResponse.json()
      setData(images)
      console.log(images)
    }
    apiData()
  }, [data])

  return {data}

}



export default useImagesAPI;