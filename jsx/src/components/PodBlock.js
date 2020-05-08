import React, { Component } from 'react'

class PodBlock extends Component {

    render() {
        return(
            <div className="col-4 col-6-medium col-12-small">
                <section className="box">
                    <a href="#" className="image featured"><img src={this.props.thumbnail} alt="" /></a>
                    <header>
                        <h3>{this.props.title}</h3>
                    </header>

                    <p>{this.props.description}</p>
                    <footer>
                        <ul className="actions">
                            <li><a href="#" className="button alt">Find out more</a></li>
                        </ul>
                    </footer>
                </section>
            </div>
        )
    }
}

export default PodBlock