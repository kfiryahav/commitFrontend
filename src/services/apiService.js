import { showError, showSuccess } from './sawlService';

const API_BASE_URL = 'http://localhost:5000';

const handleApiResponse = async (url, method, formData) => {
    try {
        const response = await fetch(`${API_BASE_URL}${url}`, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: method !== 'GET' ? JSON.stringify(formData) : undefined,
        });

        if (!response.ok) {
            showError();
            throw new Error('Failed to fetch data');
        }
        if (method === 'POST') {
            showSuccess("User is saved in DB!", "You clicked the button!");
        }

        return await response.json();
    } catch (error) {
        showError();
        throw new Error(error.message);
    }
};

export const postFormData = async (formData) => {
    try {
        const response = await handleApiResponse('/users/addUser', 'POST', formData);
        return response;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const getUser = async (email) => {
    try {
        const response = await handleApiResponse(`/users/getUser?email=${email}`, 'GET');
        return response;
    } catch (error) {
        throw new Error(error.message);
    }
};
