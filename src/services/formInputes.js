const inputData = [
    {
        id: 'email',
        label: 'Email',
        type: 'text',
        placeholder: 'Email',
        validation: {
            required: 'Email is required',
            pattern: {
                value: /\S+@\S+\.\S+/, message: 'Invalid email address'
            }
        }
    },
    {
        id: 'phone',
        label: 'Phone Number',
        type: 'text',
        placeholder: 'Phone Number',
        validation: {
            required: 'Phone number is required',
            pattern: {
                value: /^\d{10}$/,
                message: 'Phone number must be 10 digits'
            }
        }
    },
    {
        id: 'password',
        label: 'Password',
        type: 'password',
        placeholder: 'Password',
        validation: {
            required: 'Password is required',
            minLength: {
                value: 6,
                message: 'Password must be at least 6 characters long'
            },
            maxLength: {
                value: 12,
                message: 'Password must be at most 12 characters long'
            },
            pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/,
                message: 'Password should include at least one uppercase letter, one lowercase letter, one number, and one special character'
            }
        }
    },
    {
        id: 'confirmPassword',
        label: 'Confirm Password',
        type: 'password',
        placeholder: 'Confirm Password',
        validation: {
            required: 'Please confirm your password',
            validate: (value, allValues) => value === allValues['password'] || 'The passwords do not match'
        }
    }
];

export default inputData;
