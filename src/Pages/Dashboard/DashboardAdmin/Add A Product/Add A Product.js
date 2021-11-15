import React from 'react';
import { useForm } from 'react-hook-form';
import useFirebase from '../../../../hooks/useFirebase';

const AddAProduct = () => {
    const {user} = useFirebase();
    const{
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div>
            <h2>Add</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")}
                placeholder="Name"
                className="p-2 m-2 w-100"
                />
            </form>
        </div>
    );
};

export default AddAProduct;