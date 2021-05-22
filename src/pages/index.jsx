"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var gatsby_plugin_image_1 = require("gatsby-plugin-image");
require("../styles/style.scss");
var react_1 = require("react");
var main_1 = require("../scripts/main");
var react_helmet_1 = require("react-helmet");
function Home() {
    react_1.useEffect(function () {
        main_1.setupMain();
    });
    return (<div className="body-wrap boxed-container">
            <react_helmet_1.Helmet>
                <link href="https://fonts.googleapis.com/css?family=Heebo:400,700|Oxygen:700" rel="stylesheet"/>
                <script src="https://unpkg.com/scrollreveal@4.0.5/dist/scrollreveal.min.js"/>
            </react_helmet_1.Helmet>
            <header className="site-header text-light">
                <div className="container">
                    <div className="site-header-inner">
                        <div className="brand header-brand">
                            <h1 className="m-0">
                                <a href="#">
                                    <gatsby_plugin_image_1.StaticImage src={"./images/logo.svg"} alt={"Logo"} className="header-logo-image"/>
                                </a>
                            </h1>
                        </div>
                    </div>
                </div>
            </header>

            <main>
                <section className="hero text-center text-light">
                    <div className="hero-bg"></div>
                    <div className="hero-particles-container">
                        <canvas id="hero-particles"></canvas>
                    </div>
                    <div className="container-sm">
                        <div className="hero-inner">
                            <div className="hero-copy">
                                <h1 className="hero-title mt-0">
                                    Organize Your Life
                                </h1>
                                <p className="hero-paragraph">
                                    Take dynamic notes , make proper reminders ,
                                    take control of your life and be productive.
                                    Our app ensures you keep track of every inch
                                    of time in your life
                                </p>
                                <div className="hero-cta">
                                    <a className="button button-primary button-wide-mobile" href="#">Get early access</a>
                                </div>
                            </div>
                            <div className="mockup-container">
                                <div className="mockup-bg">
                                    <img src="dist/images/iphone-hero-bg.svg" alt="iPhone illustration"/>
                                </div>
                                <img className="device-mockup" src="dist/images/mockup-front.png" alt="iPhone Hero"/>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="features-extended section">
                    <div className="features-extended-inner section-inner">
                        <div className="features-extended-wrap">
                            <div className="container">
                                <div className="feature-extended">
                                    <div className="feature-extended-image">
                                        <div className="mockup-bg">
                                            <img src="dist/images/iphone-feature-bg-01.svg" alt="iPhone Feature 01 illustration"/>
                                        </div>
                                        <img className="device-mockup is-revealing" src="dist/images/mockup-left-nav.png" alt="iPhone Feature 01"/>
                                    </div>
                                    <div className="feature-extended-body is-revealing">
                                        <h3 className="mt-0 mb-16">
                                            Flexible to your needs
                                        </h3>
                                        <p className="m-0">
                                            Super flexible in managing different
                                            types of media , Allows you to
                                            create notes , mindmaps & much more
                                        </p>
                                    </div>
                                </div>
                                <div className="feature-extended">
                                    <div className="feature-extended-image">
                                        <div className="mockup-bg">
                                            <img src="dist/images/iphone-feature-bg-02.svg" alt="iPhone Feature 02 illustration"/>
                                        </div>
                                        <img className="device-mockup is-revealing" src="dist/images/mockup-filter.png" alt="iPhone Feature 02"/>
                                    </div>
                                    <div className="feature-extended-body is-revealing">
                                        <h3 className="mt-0 mb-16">
                                            Display the way you want
                                        </h3>
                                        <p className="m-0">
                                            You'll never lose anything in this
                                            app , Amazing filters ensure you
                                            find your content as soon as
                                            possible
                                        </p>
                                    </div>
                                </div>
                                <div className="feature-extended">
                                    <div className="feature-extended-image">
                                        <div className="mockup-bg">
                                            <img src="dist/images/iphone-feature-bg-03.svg" alt="iPhone Feature 03 illustration"/>
                                        </div>
                                        <img className="device-mockup is-revealing" src="dist/images/mockup-tag.png" alt="iPhone Feature 03"/>
                                    </div>
                                    <div className="feature-extended-body is-revealing">
                                        <h3 className="mt-0 mb-16">
                                            Organize the way you want
                                        </h3>
                                        <p className="m-0">
                                            Organize your notes with tags &
                                            categories to make it easy to look
                                            at and clear the clutter
                                        </p>
                                    </div>
                                </div>
                                <div className="feature-extended">
                                    <div className="feature-extended-image">
                                        <div className="mockup-bg">
                                            <img src="dist/images/iphone-feature-bg-04.svg" alt="iPhone Feature 04 illustration"/>
                                        </div>
                                        <img className="device-mockup is-revealing" src="dist/images/mockup-search.png" alt="iPhone Feature 04"/>
                                    </div>
                                    <div className="feature-extended-body is-revealing">
                                        <h3 className="mt-0 mb-16">
                                            Search Everywhere & Everything
                                        </h3>
                                        <p className="m-0">
                                            Filter your search with a large list
                                            of filters and provide text to look
                                            for everywhere you wrote
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="site-footer">
                <div className="footer-particles-container">
                    <canvas id="footer-particles"></canvas>
                </div>
                <div className="site-footer-top">
                    <section className="cta section text-light">
                        <div className="container-sm">
                            <div className="cta-inner section-inner">
                                <div className="cta-header text-center">
                                    <h2 className="section-title mt-0">
                                        Stay in the know
                                    </h2>
                                    <p className="section-paragraph">
                                        We launch updates really soon , keep in
                                        touch with us to receieve information
                                        about updates & different apps
                                    </p>
                                    <div className="cta-cta">
                                        <a className="button button-primary button-wide-mobile" href="#">Get early access</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="site-footer-bottom">
                    <div className="container">
                        <div className="site-footer-inner">
                            <div className="brand footer-brand">
                                <a href="#">
                                    <img src="dist/images/logo.svg" alt="Timeline Logo"/>
                                </a>
                            </div>
                            <ul className="footer-links list-reset">
                                <li>
                                    <a target="_blank" href="http://timeline-app.tk/privacy-policy">Privacy Policy</a>
                                </li>
                                <li>
                                    <a target="_blank" href="http://timeline-app.tk/terms-of-services">Terms of Services</a>
                                </li>
                                <li>
                                    <a href="#">About us</a>
                                </li>
                                <li>
                                    <a href="#">Support</a>
                                </li>
                            </ul>
                            <ul className="footer-social-links list-reset">
                                <li>
                                    <a href="#">
										<span className="screen-reader-text">Facebook</span>
                                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z" fill="#FFF"/>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
										<span className="screen-reader-text">Twitter</span>
                                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z" fill="#FFF"/>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
										<span className="screen-reader-text">Google</span>
                                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" fill="#FFF"/>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                            <div className="footer-copyright">
                                &copy; 2021 Timeline, all rights reserved
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>);
}
exports.default = Home;
