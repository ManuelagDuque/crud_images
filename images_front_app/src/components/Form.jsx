import React from 'react';
import {XCircleFillIcon} from '@primer/octicons-react';
import useCreateImages from '../hooks/useCreateImages';
import {Link} from 'react-router-dom'
import '../style/style.css';

function Form() {

    const {register, handleSubmit, handlePref, create} = useCreateImages()

    return (
    <div className="d-flex align-items-center flex-column align-content-center">
        <div className="card card-form border d-flex p-2 flex-column mt-5">
            <Link to='/'>
                <XCircleFillIcon size={30} fill="#CB3234" />
            </Link>
            <h2 className="mt-2">Upload an Image Form</h2>
            <form onSubmit={handleSubmit(create)} className="mt-3">
                <div className="form-input mb-3">
                    <div className="form-group mb-3 justify-content-center">
                        <label className="form-label form-file-label">Image</label>
                        <br/>
                        <input type="file" className="form-control" name="file" {...register('file', {required: true})} />
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label form-file-label">Name</label>
                    <input type="text" className="form-control" name="name" {...register('name', {required: true})} />
                </div>
                <div className="form-check form-file-check">
                    <input type="checkbox" className="form-check-input" name="preferred" onChange={handlePref} {...register('preferred')}/>
                    <label className="form-check-label">Favourite?</label>
                </div>
                <button type="submit" className="btn btn-primary mt-3 mb-3">Save</button>
            </form>
        </div>
    </div>
  )
}

export default Form;