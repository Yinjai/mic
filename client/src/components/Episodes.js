import React, { Component } from 'react';
import PodcastFeed from '../functional/PodcastFeed.js';

class Episodes extends Component {

    render() {
        return(
			<div>
				<section id="main">
					<div className="container">
						<div className="col-12">
							<section>
								<header className="major">
									<h2>Episodes</h2>
								</header>
								<div className="row">
									<PodcastFeed state={this.props} />
								</div>
							</section>
						</div>
					</div>
				</section>
			</div>
        )
    }
}

export default Episodes