import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'

function Form() {
  
    const{register, handleSubmit} = useForm();
    const onSubmit = data => {
        const formData = new FormData();
        formData.append("image", data[0]);
        formData.append("name", data[1]);
        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/image',
            data: formData,
            headers: {'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'}
        }
        )
        .then(response => {console.log(response.data)})

    }

    return (
    <div>
        <h2>Upload an Image Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Image</label>
                <input type="file" {...register('image', {required: true})}/>
            </div>
            <div>
                <label>Image Name</label>
                <input type="text" {...register('name', {required: true})}/>
            </div>
            <input type="submit" value="Upload"/>
        </form>
    </div>
  )
}

export default Form