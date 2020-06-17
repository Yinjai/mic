import React, { Component } from 'react'

class IntroBlock extends Component {

    render() {
        return(
            <div className="col-4 col-12-medium intro">
                <section className={this.props.position}>
                    <a href={this.props.link} rel="noopener noreferrer" target="_blank">
                        <i className={this.props.logo}></i>
                        <header>
                            <h2>{this.props.title}</h2>
                        </header>
                        <p>{this.props.description}</p>
                    </a>
                </section>
            </div>
        )
    }
}

export default IntroBlock