import { useForm } from 'react-hook-form'


const useCreateImages = () => {
    const{register, handleSubmit} = useForm();
    const create = async (data) => {
        const formData = new FormData();
        formData.append("file", data.file[0]);
        formData.append("name", data.name);
        console.log(data)

            await fetch("http://127.0.0.1:8000/image", {
            method: "POST",
            body: formData,
        }).then((res) => res.json());
    };

  return {
    register,
    handleSubmit,
    create
  }
}

export default useCreateImages;