"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var gatsby_plugin_image_1 = require("gatsby-plugin-image");
require("../styles/style.scss");
var react_helmet_1 = require("react-helmet");
var icons_1 = require("@material-ui/icons");
var core_1 = require("@material-ui/core");
var Fade_1 = require("react-reveal/Fade");
var Providers_1 = require("../components/Providers");
function Home() {
    return (<Providers_1.default>
            <div className="body-wrap boxed-container">
                <react_helmet_1.Helmet>
                    <link href="https://fonts.googleapis.com/css?family=Heebo:400,700|Oxygen:700" rel="stylesheet"/>
                </react_helmet_1.Helmet>
                <header className="site-header text-light">
                    <div className="container">
                        <div className="site-header-inner">
                            <div className="brand header-brand">
                                <h1 className="m-0">
                                    <a href="#">
                                        <gatsby_plugin_image_1.StaticImage width={"140"} height={"70"} src={"../images/logo.svg"} alt={"Logo"} transformOptions={{ fit: "fill" }}/>
                                    </a>
                                </h1>
                            </div>
                        </div>
                    </div>
                </header>

                <main>
                    <section className="hero text-center text-light">
                        <div className="hero-bg"/>
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
                                    <a href="./web" className={"button-link"}>
                                        <core_1.Button color={"secondary"} variant={"outlined"}>
                                            Try Web Version
                                        </core_1.Button>
                                    </a>
                                    <a href={"./web"}>
                                        <core_1.IconButton>
                                            <icons_1.Language color={"primary"}/>
                                        </core_1.IconButton>
                                    </a>
                                    <a href={"./android"}>
                                        <core_1.IconButton>
                                            <icons_1.Android color={"primary"}/>
                                        </core_1.IconButton>
                                    </a>
                                </div>
                                <div className="mockup-container">
                                    <div className="mockup-bg">
                                        <gatsby_plugin_image_1.StaticImage src={"../images/iphone-hero-bg.svg"} alt={"iPhone illustration"} transformOptions={{ fit: "fill" }} layout={"fixed"}/>
                                    </div>
                                    <div className={"device-mockup"}>
                                        <gatsby_plugin_image_1.StaticImage src={"../images/mockup-front.png"} alt={"iPhone Hero"}/>
                                    </div>
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
                                                <gatsby_plugin_image_1.StaticImage src={"../images/iphone-feature-bg-01.svg"} alt={"iPhone Feature 01 illustration"} transformOptions={{ fit: "fill" }} layout={"fixed"}/>
                                            </div>
                                            <Fade_1.default left>
                                                <div className="device-mockup">
                                                    <gatsby_plugin_image_1.StaticImage src={"../images/mockup-left-nav.png"} alt={"iPhone Feature 01"}/>
                                                </div>
                                            </Fade_1.default>
                                        </div>
                                        <Fade_1.default right>
                                            <div className="feature-extended-body">
                                                <h3 className="mt-0 mb-16">
                                                    Flexible to your needs
                                                </h3>
                                                <p className="m-0">
                                                    Super flexible in managing different
                                                    types of media , Allows you to
                                                    create notes , mindmaps & much more
                                                </p>
                                            </div>
                                        </Fade_1.default>
                                    </div>
                                    <div className="feature-extended">
                                        <div className="feature-extended-image">
                                            <div className="mockup-bg">
                                                <gatsby_plugin_image_1.StaticImage src="../images/iphone-feature-bg-02.svg" alt="iPhone Feature 02 illustration" transformOptions={{ fit: "fill" }} layout={"fixed"}/>
                                            </div>
                                            <Fade_1.default right>
                                                <div className="device-mockup">
                                                    <gatsby_plugin_image_1.StaticImage src="../images/mockup-filter.png" alt="iPhone Feature 02"/>
                                                </div>
                                            </Fade_1.default>
                                        </div>
                                        <Fade_1.default left>
                                            <div className="feature-extended-body">
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
                                        </Fade_1.default>
                                    </div>
                                    <div className="feature-extended">
                                        <div className="feature-extended-image">
                                            <div className="mockup-bg">
                                                <gatsby_plugin_image_1.StaticImage src="../images/iphone-feature-bg-03.svg" alt="iPhone Feature 03 illustration" transformOptions={{ fit: "fill" }} layout={"fixed"}/>
                                            </div>
                                            <Fade_1.default left>
                                                <div className="device-mockup">
                                                    <gatsby_plugin_image_1.StaticImage src="../images/mockup-tag.png" alt="iPhone Feature 03"/>
                                                </div>
                                            </Fade_1.default>
                                        </div>
                                        <Fade_1.default right>
                                            <div className="feature-extended-body">
                                                <h3 className="mt-0 mb-16">
                                                    Organize the way you want
                                                </h3>
                                                <p className="m-0">
                                                    Organize your notes with tags &
                                                    categories to make it easy to look
                                                    at and clear the clutter
                                                </p>
                                            </div>
                                        </Fade_1.default>
                                    </div>
                                    <div className="feature-extended">
                                        <div className="feature-extended-image">
                                            <div className="mockup-bg">
                                                <gatsby_plugin_image_1.StaticImage src="../images/iphone-feature-bg-04.svg" alt="iPhone Feature 04 illustration" transformOptions={{ fit: "fill" }} layout={"fixed"}/>
                                            </div>
                                            <Fade_1.default right>
                                                <div className="device-mockup">
                                                    <gatsby_plugin_image_1.StaticImage src="../images/mockup-search.png" alt="iPhone Feature 04"/>
                                                </div>
                                            </Fade_1.default>
                                        </div>
                                        <Fade_1.default left>
                                            <div className="feature-extended-body">
                                                <h3 className="mt-0 mb-16">
                                                    Search Everywhere & Everything
                                                </h3>
                                                <p className="m-0">
                                                    Filter your search with a large list
                                                    of filters and provide text to look
                                                    for everywhere you wrote
                                                </p>
                                            </div>
                                        </Fade_1.default>
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
                                        <a href="./web" className={"button-link"}>
                                            <core_1.Button color={"secondary"} variant={"outlined"}>
                                                Try Web Demo
                                            </core_1.Button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="site-footer-bottom">
                        <div className="container">
                            <div className="site-footer-inner">
                                <div className="brand footer-brand">
                                    <a href="/">
                                        <gatsby_plugin_image_1.StaticImage src="../images/logo.svg" alt="Timeline Logo"/>
                                    </a>
                                </div>
                                <ul className="footer-links list-reset">
                                    <li>
                                        <a target="_blank" href="./policy">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="./terms">Terms of Services</a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="./about">About us</a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="./support">Support</a>
                                    </li>
                                </ul>
                                <ul className="footer-social-links list-reset">
                                    <li>
                                        <a href="#">
                                            <span className="screen-reader-text">Facebook</span>
                                            <core_1.IconButton>
                                                <icons_1.Facebook />
                                            </core_1.IconButton>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="screen-reader-text">Twitter</span>
                                            <core_1.IconButton>
                                                <icons_1.Twitter />
                                            </core_1.IconButton>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/timeline-notes">
                                            <span className="screen-reader-text">Github</span>
                                            <core_1.IconButton>
                                                <icons_1.GitHub />
                                            </core_1.IconButton>
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
            </div>
        </Providers_1.default>);
}
exports.default = Home;
