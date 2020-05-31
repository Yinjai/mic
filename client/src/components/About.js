import React, { Component } from 'react';
import axios from 'axios';

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
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
        axios({
          method: "POST", 
          url:"/.netlify/functions/index/send", 
          data:  this.state,
        }).then((res) => {
            if(res.status === 200) {
                console.log(res);
                alert("Enquiry Sent."); 
                this.resetForm();
            }
            else {
                alert("Failed to send. Please try again.")
            }
        }).catch(err => {
            console.log(err)
        })
    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    resetForm(){
        this.setState({name: '', email: '', message: ''})
    }

    render() {
        const { name, email, message } = this.state;
        return(
			<section id="main">
				<div className="container">
					<article className="box post">
                        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" value={name} onChange={this.onNameChange.bind(this)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" aria-describedby="emailHelp" value={email} onChange={this.onEmailChange.bind(this)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea className="form-control" rows="5" value={message} onChange={this.onMessageChange.bind(this)} />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
					</article>
				</div>
			</section>
        )
    }
}

export default About