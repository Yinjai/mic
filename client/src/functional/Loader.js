import React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import LoadingOverlay from 'react-loading-overlay';
import ContactForm from '../components/ContactForm';

const Loader = props => {
    const { promiseInProgress } = usePromiseTracker();

    if(!promiseInProgress) {
        return (
            <ContactForm />
        )
    }
    else {
        return (
            <LoadingOverlay
                active={true}
                spinner
                text='Sending your enquiry...'
            >
                <ContactForm />
            </LoadingOverlay>
        ) 
    }
}  
        
    
export default Loader