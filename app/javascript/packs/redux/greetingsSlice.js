import { createAsyncThunk } from '@reduxjs/toolkit';

const Api_Url = 'http://localhost:3000/api/v1/greetings';

const initialState = {
    greeting: ''
};


export default (state = initialState, action) => {
    switch (action.type) {
        case 'greetings/fetchGreeting/pending':
            return state;
        case 'greetings/fetchGreeting/fulfilled':
            return {
                ...state,
                greeting: action.payload
            };
        case 'greetings/fetchGreeting/rejected':
            return state;
        default:
            return state;
    }
};

export const fetchGreeting = createAsyncThunk('greetings/fetchGreeting', async () => {
    try {
        const response = await fetch(Api_Url);
        if (!response.ok) {
            throw new Error('Failed to fetch');
        }
        const data = await response.json();
        return data.text; 
    } catch (error) {
        throw error;
    }
});
