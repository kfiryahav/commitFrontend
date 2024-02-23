import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'; 
import rootReducer from '../redux/reducers'; 

// Configure your Redux store using configureStore
const store = configureStore({
    reducer: rootReducer
});

// Wrap your MyApp component with the Provider
function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
