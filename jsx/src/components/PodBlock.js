import React, { Component } from 'react'

class PodBlock extends Component {

    render() {
        return(
            <div className="col-4 col-6-medium col-12-small">
                <section className="box">
                    <a href="#" className="image featured"><img src="images/pic02.jpg" alt="" /></a>
                    <header>
                        <h3>orem ipsum dolor sit amet sit veroeros se</h3>
                    </header>
                    
                    <p>Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.</p>
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