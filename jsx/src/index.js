import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer.js';
import PodBlock from './components/PodBlock.js';

const App = ()=> {
    return (
        <div id="page-wrapper">
            <section id="header">
                    <h1><a href="index.html">Dopetrope</a></h1>

                    <nav id="nav">
                        <ul>
                            <li className="current"><a href="index.html">Home</a></li>
                            <li>
                                <a href="#">Dropdown</a>
                                <ul>
                                    <li><a href="#">Lorem ipsum dolor</a></li>
                                    <li><a href="#">Magna phasellus</a></li>
                                    <li><a href="#">Etiam dolore nisl</a></li>
                                    <li>
                                        <a href="#">Phasellus consequat</a>
                                        <ul>
                                            <li><a href="#">Magna phasellus</a></li>
                                            <li><a href="#">Etiam dolore nisl</a></li>
                                            <li><a href="#">Veroeros feugiat</a></li>
                                            <li><a href="#">Nisl sed aliquam</a></li>
                                            <li><a href="#">Dolore adipiscing</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Veroeros feugiat</a></li>
                                </ul>
                            </li>
                            <li><a href="left-sidebar.html">Left Sidebar</a></li>
                            <li><a href="right-sidebar.html">Right Sidebar</a></li>
                            <li><a href="no-sidebar.html">No Sidebar</a></li>
                        </ul>
                    </nav>

                    <section id="banner">
                        <header>
                            <h2>Howdy. This is Dopetrope.</h2>
                            <p>A responsive template by HTML5 UP</p>
                        </header>
                    </section>

                    <section id="intro" className="container">
                        <div className="row">
                            <div className="col-4 col-12-medium">
                                <section className="first">
                                    <i className="icon solid featured fa-cog"></i>
                                    <header>
                                        <h2>Ipsum consequat</h2>
                                    </header>
                                    <p>Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus.</p>
                                </section>
                            </div>
                            <div className="col-4 col-12-medium">
                                <section className="middle">
                                    <i className="icon solid featured alt fa-bolt"></i>
                                    <header>
                                        <h2>Magna etiam dolor</h2>
                                    </header>
                                    <p>Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus.</p>
                                </section>
                            </div>
                            <div className="col-4 col-12-medium">
                                <section className="last">
                                    <i className="icon solid featured alt2 fa-star"></i>
                                    <header>
                                        <h2>Tempus adipiscing</h2>
                                    </header>
                                    <p>Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus.</p>
                                </section>
                            </div>
                        </div>
                        <footer>
                            <ul className="actions">
                                <li><a href="#" className="button large">Get Started</a></li>
                                <li><a href="#" className="button alt large">Learn More</a></li>
                            </ul>
                        </footer>
                    </section>

            </section>

            <section id="main">
                <div className="container">
                    <div className="row">
                        <div className="col-12">

                                <section>
                                    <header className="major">
                                        <h2>My Portfolio</h2>
                                    </header>
                                    <div className="row">
                                        <PodBlock />
                                        <div className="col-4 col-6-medium col-12-small">
                                            <section className="box">
                                                <a href="#" className="image featured"><img src="images/pic03.jpg" alt="" /></a>
                                                <header>
                                                    <h3>Sed etiam lorem nulla</h3>
                                                </header>
                                                <p>Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.</p>
                                                <footer>
                                                    <ul className="actions">
                                                        <li><a href="#" className="button alt">Find out more</a></li>
                                                    </ul>
                                                </footer>
                                            </section>
                                        </div>
                                        <div className="col-4 col-6-medium col-12-small">
                                            <section className="box">
                                                <a href="#" className="image featured"><img src="images/pic04.jpg" alt="" /></a>
                                                <header>
                                                    <h3>Consequat et tempus</h3>
                                                </header>
                                                <p>Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.</p>
                                                <footer>
                                                    <ul className="actions">
                                                        <li><a href="#" className="button alt">Find out more</a></li>
                                                    </ul>
                                                </footer>
                                            </section>
                                        </div>
                                        <div className="col-4 col-6-medium col-12-small">
                                            <section className="box">
                                                <a href="#" className="image featured"><img src="images/pic05.jpg" alt="" /></a>
                                                <header>
                                                    <h3>Blandit sed adipiscing</h3>
                                                </header>
                                                <p>Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.</p>
                                                <footer>
                                                    <ul className="actions">
                                                        <li><a href="#" className="button alt">Find out more</a></li>
                                                    </ul>
                                                </footer>
                                            </section>
                                        </div>
                                        <div className="col-4 col-6-medium col-12-small">
                                            <section className="box">
                                                <a href="#" className="image featured"><img src="images/pic06.jpg" alt="" /></a>
                                                <header>
                                                    <h3>Etiam nisl consequat</h3>
                                                </header>
                                                <p>Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.</p>
                                                <footer>
                                                    <ul className="actions">
                                                        <li><a href="#" className="button alt">Find out more</a></li>
                                                    </ul>
                                                </footer>
                                            </section>
                                        </div>
                                        <div className="col-4 col-6-medium col-12-small">
                                            <section className="box">
                                                <a href="#" className="image featured"><img src="images/pic07.jpg" alt="" /></a>
                                                <header>
                                                    <h3>Dolore nisl feugiat</h3>
                                                </header>
                                                <p>Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.</p>
                                                <footer>
                                                    <ul className="actions">
                                                        <li><a href="#" className="button alt">Find out more</a></li>
                                                    </ul>
                                                </footer>
                                            </section>
                                        </div>
                                    </div>
                                </section>

                        </div>
                        <div className="col-12">


                                <section>
                                    <header className="major">
                                        <h2>The Blog</h2>
                                    </header>
                                    <div className="row">
                                        <div className="col-6 col-12-small">
                                            <section className="box">
                                                <a href="#" className="image featured"><img src="images/pic08.jpg" alt="" /></a>
                                                <header>
                                                    <h3>Magna tempus consequat</h3>
                                                    <p>Posted 45 minutes ago</p>
                                                </header>
                                                <p>Lorem ipsum dolor sit amet sit veroeros sed et blandit consequat sed veroeros lorem et blandit adipiscing feugiat phasellus tempus hendrerit, tortor vitae mattis tempor, sapien sem feugiat sapien, id suscipit magna felis nec elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos lorem ipsum dolor sit amet.</p>
                                                <footer>
                                                    <ul className="actions">
                                                        <li><a href="#" className="button icon solid fa-file-alt">Continue Reading</a></li>
                                                        <li><a href="#" className="button alt icon solid fa-comment">33 comments</a></li>
                                                    </ul>
                                                </footer>
                                            </section>
                                        </div>
                                        <div className="col-6 col-12-small">
                                            <section className="box">
                                                <a href="#" className="image featured"><img src="images/pic09.jpg" alt="" /></a>
                                                <header>
                                                    <h3>Aptent veroeros aliquam</h3>
                                                    <p>Posted 45 minutes ago</p>
                                                </header>
                                                <p>Lorem ipsum dolor sit amet sit veroeros sed et blandit consequat sed veroeros lorem et blandit adipiscing feugiat phasellus tempus hendrerit, tortor vitae mattis tempor, sapien sem feugiat sapien, id suscipit magna felis nec elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos lorem ipsum dolor sit amet.</p>
                                                <footer>
                                                    <ul className="actions">
                                                        <li><a href="#" className="button icon solid fa-file-alt">Continue Reading</a></li>
                                                        <li><a href="#" className="button alt icon solid fa-comment">33 comments</a></li>
                                                    </ul>
                                                </footer>
                                            </section>
                                        </div>
                                    </div>
                                </section>

                        </div>
                    </div>
                </div>
            </section>
        <Footer />
    </div>
    );
}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

