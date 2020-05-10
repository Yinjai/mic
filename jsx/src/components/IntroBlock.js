import React, { Component } from 'react'

class IntroBlock extends Component {

    render() {
        return(
            <div className="col-4 col-12-medium">
                <section className={this.props.position}>
                    <a href={this.props.link} target="_blank">
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