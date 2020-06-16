import React, { Component } from 'react';
import axios from 'axios';
import { trackPromise } from 'react-promise-tracker';

class ContactForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            subject: 'Business Enquiries'
        }
    }

    
    onSubjectChange(event) {
        this.setState({subject: event.target.value})
    }

    onNameChange(event) {
        this.setState({name: event.target.value})
    }

    onEmailChange(event) {
        this.setState({email: event.target.value})
    }

    onMessageChange(event) {
        this.setState({message: event.target.value})
    }
    
    handleSubmit(e){
        e.preventDefault();
        trackPromise(
            axios({
                method: "POST", 
                url:"/.netlify/functions/index/send", 
                data:  this.state
            }).then((res) => {
                if(res.status === 200) {
                    console.log(res.data);
                    alert("Enquiry Sent."); 
                    this.resetForm();
                }
                else {
                    alert("Failed to send. Please try again.");
                }    
            }).catch(err => {
                console.log(err)
            })
        )
    }

    resetForm(){
        this.setState({name: '', email: '', message: ''})
    }

    render() {
        const { name, email, message, subject } = this.state;
        const isEnabled =  name.length > 0 && email.length > 0 && message.length > 0;
        return(
            <article className="box post">
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)}>
                    <h3>Contact Us</h3>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" value={name} onChange={this.onNameChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" value={email} onChange={this.onEmailChange.bind(this)} />
                    </div>
                    <div className="form-select">
                        <label htmlFor="subject">Choose Subject</label>
                        <select 
                            value={subject} 
                            onChange={this.onSubjectChange.bind(this)} 
                        >
                            <option>Business Enquiries</option>
                            <option>Feedback</option>
                            <option>General</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" rows="5" value={message} onChange={this.onMessageChange.bind(this)} />
                    </div>
                    <button disabled={!isEnabled} type="submit" className="btn-primary">Submit</button>
                </form>
            </article>
        )
    }
}

export default ContactForm
