import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class PodBlock extends Component {

    render() {
        return(
            <div className="col-4 col-6-medium col-12-small">
                <section className="box">
                    <Link className="image featured" to={{pathname:`/episode/${this.props.index}`, index: this.props.index}}>
                        <img src={this.props.thumbnail.replace('http', 'https')} alt="" />
                    </Link>
                    <header>
                        <h3>{this.props.title}</h3>
                    </header>

                    <p>{this.props.description}</p>
                    <footer className="blockLinks">
                        <Link className="actions" to={{pathname:`/episode/${this.props.index}`, index: this.props.index}} className="button alt" >Listen Now</Link>
                    </footer>
                </section>
            </div>
        )
    }
}
export default PodBlock