import React, { Component } from 'react'

class Footer extends Component {

    render() {
        return(
            <section id="footer">
                <div className="container">
                    <div className="row">
                        <div className="footerSection">
                            <section>
                                <ul className="social">
                                    <li><a className="icon brands fa-facebook-f" target="_blank" href="https://www.facebook.com/MadeInChafford/"><span className="label">Facebook</span></a></li>
                                    <li><a className="icon brands fa-twitter" target="_blank" href="https://twitter.com/madeinchafford"><span className="label">Twitter</span></a></li>
                                    <li><a className="icon brands fa-instagram" target="_blank" href="https://www.instagram.com/madeinchafford/"><span className="label">Instagram</span></a></li>
                                </ul>
                                <ul className="contact">
                                    <li>
                                        <h3>Enquiries</h3>
                                        <p><a href="mailto:madeinchafford@gmail.com">madeinchafford@gmail.com</a></p>
                                    </li>
                                    <li>
                                        <h3>Phone</h3>
                                        <p>(800) 000-0000</p>
                                    </li>
                                </ul>
                            </section>
                        </div>
                        <div className="col-12">


                                <div id="copyright">
                                    <ul className="links">
                                        <li>&copy; Made in Chafford. All rights reserved.</li>
                                    </ul>
                                </div>

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Footer