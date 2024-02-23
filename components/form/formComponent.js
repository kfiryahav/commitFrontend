import { setUserData } from '@/redux/actions';
import { postFormData } from '@/services/apiService';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import GenericInput from './genericInputComponent';
import formInputs from '/src//services/formInputes'; // Import the input data array
import cookie from 'js-cookie'; // Import the js-cookie library
import SubmitBtn from './submitBtnComponent';
import { showError } from '@/services/sawlService';


const Form = () => {
    const { register, handleSubmit, reset, formState: { errors }, getValues } = useForm();
    const dispatch = useDispatch();

    const onSubmit = async (data) => {
        const formData = { ...data };
        delete formData.confirmPassword;
        try {
            const response = await postFormData(formData);
            console.log(response);
            if(response.code === 11000){
                showError('Looks like we already have this user...')
                return;
            }
            cookie.remove('email');
            cookie.set('email', response.email);
            dispatch(setUserData(response)); // Dispatch action with API response
            reset();
        } catch (error) {
            console.error('Error while calling API:', error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='mt-4'>
            {/* Iterate over the array of input configurations from inputData */}
            {formInputs.map(input => (
                <GenericInput
                    key={input.id} // Use a unique key for each input
                    id={input.id}
                    label={input.label}
                    type={input.type}
                    register={register}
                    getValues={getValues} // Pass getValues as a prop
                    errors={errors}
                    placeholder={input.placeholder}
                    validation={input.validation}
                />

            ))}
            <SubmitBtn style="btn btn-primary">Submit</SubmitBtn>
        </form>
    );
};

export default Form;
