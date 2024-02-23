import React from 'react';

const GenericInputComponent = ({ id, label, type, register, getValues, errors, placeholder, validation }) => (
    <div className="mb-3">
        <label htmlFor={id} className="form-label">{label}:</label>
        <input
            type={type}
            id={id}
            {...register(id, validation)}
            className={`form-control ${errors[id] ? 'is-invalid' : ''}`}
            placeholder={placeholder}
        />
        {errors[id] && <div className="invalid-feedback">{errors[id].message}</div>}
    </div>
);

export default GenericInputComponent;
