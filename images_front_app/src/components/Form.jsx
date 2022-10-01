import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import {XCircleFillIcon} from '@primer/octicons-react'

import '../style/style.css'

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
    <div className="d-flex align-items-center flex-column align-content-center">
        <div className="card card-form border d-flex p-2 flex-column mt-5">
            <XCircleFillIcon size={30} fill="#CB3234" />
            <h2 className="mt-2">Upload an Image Form</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-3">
                <div className="form-input mb-3">
                    <div className="form-group mb-3 justify-content-center">
                        <label className="form-label form-file-label">Image</label>
                        <br/>
                        <input type="file" className="form-control" name="image" {...register('image', {required: true})} />
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label form-file-label">Name</label>
                    <input type="text" className="form-control" name="name" {...register('name', {required: true})} />
                </div>
                <button type="submit" className="btn btn-primary mt-3 mb-3">Save</button>
            </form>
        </div>
    </div>
  )
}

export default Form