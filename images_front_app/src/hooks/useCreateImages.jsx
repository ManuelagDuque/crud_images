import { useForm } from 'react-hook-form'
import {useState} from 'react';


const useCreateImages = () => {
  const [pref, setPref] = useState()


    const{register, handleSubmit} = useForm();
    const create = async (data) => {
        const formData = new FormData();
        formData.append("file", data.file[0]);
        formData.append("name", data.name);
        formData.append("preferred", data.preferred)
            await fetch("http://127.0.0.1:8000/image", {
            method: "POST",
            body: formData,
        }).then((res) => res.json());
    };
    

    const handlePref = (e) => {
        setPref(e.target.checked)
        console.log(pref)
    }
  

  return {
    register,
    handleSubmit,
    create,
    handlePref
  }
}

export default useCreateImages;