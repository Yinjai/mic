import React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import LoadingOverlay from 'react-loading-overlay';
import ContactForm from '../components/ContactForm';

const Loader = props => {
    const { promiseInProgress } = usePromiseTracker();
    let isActive = false;

    if(promiseInProgress) {
        isActive = true;
    }

    return (
        <LoadingOverlay
            active={isActive}
            spinner
            text='Sending your enquiry...'
        >
            <ContactForm />
        </LoadingOverlay>
    ) 
    
}  
        
    
export default Loader