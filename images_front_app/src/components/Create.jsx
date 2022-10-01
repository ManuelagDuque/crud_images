import React from "react";
import { useForm } from "react-hook-form";

import "../style/style.css";

function Create() {
    const {image, handleSubmit} = useForm();
    const onSubmit = async (data) => {
        const formImage = new FormData();
        formImage.append("file", data.file[0]);
        console.log("data", data);
    };
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-input mb-3">
                <div className="input-group mb-3">
                    <label className="form-label">Image</label>
                    <input type="file" className="form-control" name="image" ref={image}/>
                </div>
            </div>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" name="name"/>
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
        </form>
    </div>
  );
};

/**
function Create() {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append("file", data.file[0]);

        const res = await fetch("http://127.0.0.1:8000/image", {
            method: "POST",
            body: formData,
        }).then((res) => res.json());
        alert(JSON.stringify(`${res.message}, status: ${res.status}`));
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="file" {...register("file")} />

                <input type="submit" />
            </form>
        </div>
    );
}
*/

export default Create
