import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SoundCloudBlock from './SoundCloudBlock.js';

class EpisodePage extends Component {

    render() {
        return(
            <div>
				<section id="header">					
						<h1><Link to="/" className="MIC">Made in Chafford</Link></h1>
						<nav id="nav">
							<ul>
								<li><Link to="/" className="Home">Home</Link></li>
								<li><a href="left-sidebar.html">Left Sidebar</a></li>
								<li><a href="right-sidebar.html">Right Sidebar</a></li>
								<li className="current"><a href="no-sidebar.html">No Sidebar</a></li>
							</ul>
						</nav>

				</section>

			
				<section id="main">
					<div className="container">
							<article className="box post">
								<a href="#" className="image featured"><img src="/images/pic01.jpg" alt="" /></a>
								<header>
									<h2>No Sidebar</h2>
									<p>Lorem ipsum dolor sit amet feugiat</p>
								</header>
								<p>
                                    <SoundCloudBlock index={this.props.location.pathname.split('episode/').pop()} />
									Vestibulum scelerisque ultricies libero id hendrerit. Vivamus malesuada quam faucibus ante dignissim auctor
									hendrerit libero placerat. Nulla facilisi. Proin aliquam felis non arcu molestie at accumsan turpis commodo.
									Proin elementum, nibh non egestas sodales, augue quam aliquet est, id egestas diam justo adipiscing ante.
									Pellentesque tempus nulla non urna eleifend ut ultrices nisi faucibus.
									Vestibulum scelerisque ultricies libero id hendrerit. Vivamus malesuada quam faucibus ante dignissim auctor
									hendrerit libero placerat. Nulla facilisi. Proin aliquam felis non arcu molestie at accumsan turpis commodo.
									Proin elementum, nibh non egestas sodales, augue quam aliquet est, id egestas diam justo adipiscing ante.
								</p>
								<p>
									Praesent a dolor leo. Duis in felis in tortor lobortis volutpat et pretium tellus. Vestibulum ac ante nisl,
									a elementum odio. Duis semper risus et lectus commodo fringilla. Maecenas sagittis convallis justo vel mattis.
									placerat, nunc diam iaculis massa, et aliquet nibh leo non nisl vitae porta lobortis, enim neque fringilla nunc,
									eget faucibus lacus sem quis nunc suspendisse nec lectus sit amet augue rutrum vulputate ut ut mi. Aenean
									elementum, mi sit amet porttitor lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor.
								</p>
								<section>
									<header>
										<h3>Something else</h3>
									</header>
									<p>
										Elementum odio duis semper risus et lectus commodo fringilla. Maecenas sagittis convallis justo vel mattis.
										placerat, nunc diam iaculis massa, et aliquet nibh leo non nisl vitae porta lobortis, enim neque fringilla nunc,
										eget faucibus lacus sem quis nunc suspendisse nec lectus sit amet augue rutrum vulputate ut ut mi. Aenean
										elementum, mi sit amet porttitor lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
										sit amet nullam consequat feugiat dolore tempus.
										Elementum odio duis semper risus et lectus commodo fringilla. Maecenas sagittis convallis justo vel mattis.
										placerat, nunc diam iaculis massa, et aliquet nibh leo non nisl vitae porta lobortis, enim neque fringilla nunc,
										eget faucibus lacus sem quis nunc suspendisse nec lectus sit amet augue rutrum vulputate ut ut mi. Aenean
										elementum, mi sit amet porttitor lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor.
									</p>
									<p>
										Nunc diam iaculis massa, et aliquet nibh leo non nisl vitae porta lobortis, enim neque fringilla nunc,
										eget faucibus lacus sem quis nunc suspendisse nec lectus sit amet augue rutrum vulputate ut ut mi. Aenean
										elementum, mi sit amet porttitor lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
										sit amet nullam consequat feugiat dolore tempus.
									</p>
								</section>
								<section>
									<header>
										<h3>So in conclusion ...</h3>
									</header>
									<p>
										Nunc diam iaculis massa, et aliquet nibh leo non nisl vitae porta lobortis, enim neque fringilla nunc,
										eget faucibus lacus sem quis nunc suspendisse nec lectus sit amet augue rutrum vulputate ut ut mi. Aenean
										elementum, mi sit amet porttitor lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
										sit amet nullam consequat feugiat dolore tempus. Elementum odio duis semper risus et lectus commodo fringilla.
										Maecenas sagittis convallis justo vel mattis.
									</p>
								</section>
							</article>

					</div>
				</section>
            </div>
        )
    }
}

export default EpisodePage