import React from 'react'

export default function Home() {
    return (
        <div>

            <header id="header" className="fixed-top" style={{ background: '#37517e' }}>
                <div className="container d-flex align-items-center">

                    <h1 className="logo me-auto"><a href="index.html">Ingems Technology</a></h1>
                    <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a>

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                            <li><a className="nav-link scrollto" href="#about">About</a></li>
                            <li><a className="nav-link scrollto" href="#services">Services</a></li>
                            <li><a className="nav-link   scrollto" href="#portfolio">Portfolio</a></li>
                            <li><a className="nav-link scrollto" href="#team">Team</a></li>
                            <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li><a href="#">Drop Down 1</a></li>
                                    <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                                        <ul>
                                            <li><a href="#">Deep Drop Down 1</a></li>
                                            <li><a href="#">Deep Drop Down 2</a></li>
                                            <li><a href="#">Deep Drop Down 3</a></li>
                                            <li><a href="#">Deep Drop Down 4</a></li>
                                            <li><a href="#">Deep Drop Down 5</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Drop Down 2</a></li>
                                    <li><a href="#">Drop Down 3</a></li>
                                    <li><a href="#">Drop Down 4</a></li>
                                </ul>
                            </li>
                            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                            <li><a className="getstarted scrollto" href="#about">Estimate Project</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                </div>
            </header>


            <section id="hero" className="d-flex align-items-center">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                            <h1>Better Solutions For Your Business</h1>
                            <h2>We are team of talented designers making websites with Bootstrap</h2>
                            <div className="d-flex justify-content-center justify-content-lg-start">
                                <a href="#about" className="btn-get-started scrollto">Estimate Project Now</a>
                                <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox btn-watch-video"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
                            <img src="assets/img/hero-img.png" className="img-fluid animated" alt="" />
                        </div>
                    </div>
                </div>

            </section>

            <main id="main">

                <section id="clients" className="clients section-bg">
                    <div className="container">

                        <div className="row" data-aos="zoom-in">

                            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                <img src="assets/img/clients/client-1.png" className="img-fluid" alt="" />
                            </div>

                            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                <img src="assets/img/clients/client-2.png" className="img-fluid" alt="" />
                            </div>

                            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                <img src="assets/img/clients/client-3.png" className="img-fluid" alt="" />
                            </div>

                            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                <img src="assets/img/clients/client-4.png" className="img-fluid" alt="" />
                            </div>

                            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                <img src="assets/img/clients/client-5.png" className="img-fluid" alt="" />
                            </div>

                            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                <img src="assets/img/clients/client-6.png" className="img-fluid" alt="" />
                            </div>

                        </div>

                    </div>
                </section>

                <section id="about" className="about">
                    <div className="container" data-aos="fade-up">

                        <div className="section-title">
                            <h2>Why Work With Us?</h2>
                        </div>

                        <div className="row content">
                            <div className="col-lg-12">
                                <p>
                                    It's great to hear that you believe your approach, expertise, and values set you apart as the best partner for businesses seeking innovation and success in today's fast-paced digital landscape.
                                    Having a clear value proposition and a strong sense of your unique selling points is crucial in attracting and retaining clients.
                                    Here are some suggestions on how you can further communicate and demonstrate your value to potential clients:
                                </p>
                            </div>
                        </div>

                        <section id="services" className="services section-bg" style={{ 'background': 'white' }}>
                            <div className="container" >

                                <div className="row" >
                                    <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                        <div className="icon-box">
                                            <div className="icon"><i className="bi bi-building"></i></div>
                                            <h2><a href="" style={{ 'fontSize': '20px' }}>Expertise and Experience</a></h2>
                                            <hr />
                                            <p>
                                                Software development companies typically have a team of experienced professionals with expertise in various programming languages, frameworks, and technologies.
                                                This means they can bring a wide range of skills and knowledge to your project.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                                        <div className="icon-box">
                                            <div className="icon"><i className="bi bi-code-square"></i></div>
                                            <h2><a href="" style={{ 'fontSize': '20px' }}>Customised Solution</a></h2>
                                            <hr />
                                            <p>Customizing a software solution involves tailoring an existing software product to meet specific requirements or preferences of a user or organization.
                                                This can be done in various ways, depending on the flexibility and extensibility of the software in question</p>
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
                                        <div className="icon-box">
                                            <div className="icon"><i className="bi-life-preserver"></i></div>
                                            <h2><a href="" style={{ 'fontSize': '20px' }}>Focus on Core Competencies</a></h2>
                                            <hr />
                                            <p>Outsourcing software development allows your business to focus on its core activities and strategic goals,
                                                while leaving the technical aspects to experts. This can lead to increased productivity and efficiency in other areas.</p>
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
                                        <div className="icon-box">
                                            <div className="icon"><i className="bx bx-layer"></i></div>
                                            <h2><a href="" style={{ 'fontSize': '20px' }}>Focus on Innovation</a></h2>
                                            <hr />
                                            <p>A reputable software development company can bring fresh perspectives and innovative ideas to your project.
                                                They can suggest creative solutions and help you stay ahead of the curve in terms of technology.</p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </section>


                    </div>
                </section>




                <section id="skills" className="skills" style={{ 'marginTop': '-60px' }}>

                    <div className="container" data-aos="fade-up">

                        <div className="row">
                            <div className="row content" data-aos-delay="100">
                                <h3>Smart solutions for your smart businesses</h3>
                                <p className="fst-italic">
                                    We provide a wide range of digital transformation solutions and services for clients in different industries.
                                </p>
                            </div>
                        </div>

                    </div>
                    {/* <span><img src="https://www.php.net//images/logos/php-med-trans-light.gif" style={{ 'height': '30px', 'width': '40px' }} /></span> */}

                    <div className="container" data-aos="fade-up" style={{ 'paddingTop': '15px' }}>

                        <div className="row mx-auto">
                            <div className="col-md-4">
                                <div class="card">
                                    <div class="card-header" style={{ 'fontSize': '18px', 'background': '#37517e', 'fontWeight': '900', 'color' : 'white' }}>
                                        Web Development
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item fontSizeAndWeight">PHP</li>
                                        <li class="list-group-item fontSizeAndWeight">React</li>
                                        <li class="list-group-item fontSizeAndWeight">Node</li>
                                        <li class="list-group-item fontSizeAndWeight">Angular</li>
                                    </ul>
                                </div>

                            </div>
                            <div className="col-md-4">
                                <div class="card">
                                    <div class="card-header" style={{ 'fontSize': '18px', 'background': '#37517e', 'fontWeight': '900', 'color' : 'white' }}>
                                        Mobile Development
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item fontSizeAndWeight">iOS</li>
                                        <li class="list-group-item fontSizeAndWeight">Android</li>
                                        <li class="list-group-item fontSizeAndWeight">React Native</li>
                                        <li class="list-group-item fontSizeAndWeight">Ionic</li>
                                    </ul>
                                </div>

                            </div>
                            <div className="col-md-4">
                                <div class="card">
                                    <div class="card-header" style={{ 'fontSize': '18px', 'background': '#37517e', 'fontWeight': '900', 'color' : 'white' }}>
                                        Software Development

                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item fontSizeAndWeight">Java & RoR</li>
                                        <li class="list-group-item fontSizeAndWeight">.NET</li>
                                        <li class="list-group-item fontSizeAndWeight">GoLang</li>
                                        <li class="list-group-item fontSizeAndWeight">Python</li>

                                    </ul>
                                </div>

                            </div>
                        </div>





                        <div className="row mx-auto" style={{ 'paddingTop': '7px' }}>
                            <div className="col-md-4">
                                <div class="card">
                                    <div class="card-header" style={{ 'fontSize': '18px', 'background': '#37517e', 'fontWeight': '900', 'color' : 'white' }}>
                                        Product and Design
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item fontSizeAndWeight">Adobe Photoshop</li>
                                        <li class="list-group-item fontSizeAndWeight">Sketch</li>
                                        <li class="list-group-item fontSizeAndWeight">Invisionapp</li>
                                        <li class="list-group-item fontSizeAndWeight">Zeplin</li>
                                    </ul>
                                </div>

                            </div>
                            <div className="col-md-4">
                                <div class="card">
                                    <div class="card-header" style={{ 'fontSize': '18px', 'background': '#37517e', 'fontWeight': '900', 'color' : 'white' }}>
                                        Cloud Platforms

                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item fontSizeAndWeight">Azure</li>
                                        <li class="list-group-item fontSizeAndWeight">AWS</li>
                                        <li class="list-group-item fontSizeAndWeight">Firebase</li>
                                        <li class="list-group-item fontSizeAndWeight">Parse</li>
                                    </ul>
                                </div>

                            </div>
                            <div className="col-md-4">
                                <div class="card">
                                    <div class="card-header" style={{ 'fontSize': '18px', 'background': '#37517e', 'fontWeight': '900', 'color' : 'white' }}>
                                        E-Commerce Development
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item fontSizeAndWeight">Magento</li>
                                        <li class="list-group-item fontSizeAndWeight">NopCommerce</li>
                                        <li class="list-group-item fontSizeAndWeight">PrestaShop</li>
                                        <li class="list-group-item fontSizeAndWeight">Endeca Commerce</li>

                                    </ul>
                                </div>

                            </div>
                        </div>




                        <div className="row mx-auto" style={{ 'paddingTop': '7px' }}>
                            <div className="col-md-4">
                                <div class="card">
                                    <div class="card-header" style={{ 'fontSize': '18px', 'background': '#37517e', 'fontWeight': '900', 'color' : 'white' }}>
                                        Data Analytics
                                    </div>
                                    {/* <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Cras justo odio</li>
                                        <li class="list-group-item">Dapibus ac facilisis in</li>
                                        <li class="list-group-item">Vestibulum at eros</li>
                                    </ul> */}
                                </div>

                            </div>
                            <div className="col-md-4">
                                <div class="card">
                                    <div class="card-header" style={{ 'fontSize': '18px', 'background': '#37517e', 'fontWeight': '900', 'color' : 'white' }}>
                                        Game Development

                                    </div>
                                    {/* <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Cras justo odio</li>
                                        <li class="list-group-item">Dapibus ac facilisis in</li>
                                        <li class="list-group-item">Vestibulum at eros</li>
                                    </ul> */}
                                </div>

                            </div>
                            <div className="col-md-4">
                                <div class="card">
                                    <div class="card-header" style={{ 'fontSize': '18px', 'background': '#37517e', 'fontWeight': '900', 'color' : 'white' }}>
                                        UI & UX Designes
                                    </div>
                                    {/* <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Cras justo odio</li>
                                        <li class="list-group-item">Dapibus ac facilisis in</li>
                                        <li class="list-group-item">Vestibulum at eros</li>
                                    </ul> */}
                                </div>

                            </div>
                        </div>
                    </div>

                </section>





                <section id="skills" className="skills">
                    <div className="container" data-aos="fade-up">

                        <div className="row">
                            <div className="col-lg-6 d-flex align-items-center" data-aos="fade-right" data-aos-delay="100">
                                <img src="assets/img/skills.png" className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">
                                <h3>Voluptatem dignissimos provident quasi corporis voluptates</h3>
                                <p className="fst-italic">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                </p>

                                <div className="skills-content">

                                    <div className="progress">
                                        <span className="skill">HTML <i className="val">100%</i></span>
                                        <div className="progress-bar-wrap">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>

                                    <div className="progress">
                                        <span className="skill">CSS <i className="val">90%</i></span>
                                        <div className="progress-bar-wrap">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>

                                    <div className="progress">
                                        <span className="skill">JavaScript <i className="val">75%</i></span>
                                        <div className="progress-bar-wrap">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>

                                    <div className="progress">
                                        <span className="skill">Photoshop <i className="val">55%</i></span>
                                        <div className="progress-bar-wrap">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </section>

                <section id="services" className="services section-bg">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h2>Services</h2>
                            <p>We provide a wide range of digital transformation solutions and services for clients in different industries.</p>
                        </div>

                        <div className="row">
                            <div className="col-md-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                <div className="icon-box">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                                            <path fill="#37517e" d="M14 18.315A7.037 7.037 0 0 1 11.263 16H3V4h18v2.264a7.046 7.046 0 0 1 2 2.15V4a2.006 2.006 0 0 0-2-2H3a2.006 2.006 0 0 0-2 2v12a2.006 2.006 0 0 0 2 2h7v2H8v2h8v-2h-2Z" />
                                            <path fill="#37517e" d="M17 6a6 6 0 1 0 6 6a5.998 5.998 0 0 0-6-6Zm0 10a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4Z" /><circle cx="17" cy="12" r="1" fill="#37517e" /></svg>

                                    </div>
                                    <h4><a href="" className='fontSizeAndWeight'>Web Development</a></h4>
                                    <p>We build modern, feature-rich innovative & creative web applications. We create meaningful, measurable results.
                                        Most of all, we give our clients whatever they need, when they need it.</p>
                                </div>
                            </div>

                            <div className="col-md-4 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                                <div className="icon-box">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="none"><g clip-path="url(#healthiconsMobileNegative0)">
                                            <path fill="#37517e" fill-rule="evenodd" d="M0 0h48v48H0V0Zm12.966 7.249a3 3 0 0 1 2.996-3.005l15.972-.026a3 3 0 0 1 3.005 2.995l.055 33.987A3 3 0 0 1 32 44.205l-15.972.026a3 3 0 0 1-3.005-2.995l-.056-33.987Zm2 .997a2 2 0 0 1 1.996-2.004L30.94 6.22a2 2 0 0 1 2.003 1.997l.044 26.99a2 2 0 0 1-1.997 2.003l-13.977.023a2 2 0 0 1-2.003-1.997l-.044-26.99Zm9.044 33.972a1.998 1.998 0 1 0-.008-3.996a1.998 1.998 0 0 0 .008 3.996Zm-.818-14.679l.79.657l.788-.652l.016-.014c1.58-1.315 2.878-2.396 3.785-3.413s1.406-1.952 1.405-2.97c-.002-1.656-1.423-2.954-3.233-2.953c-1.025 0-2.01.439-2.652 1.13l-.117.125l-.117-.126c-.643-.69-1.629-1.125-2.653-1.125c-1.81.002-3.23 1.303-3.228 2.959c0 1.018.5 1.952 1.41 2.967c.911 1.018 2.217 2.1 3.806 3.416Z" clip-rule="evenodd" /></g><defs><clipPath id="healthiconsMobileNegative0"><path d="M0 0h48v48H0z" /></clipPath></defs></g></svg>

                                    </div>
                                    <h4><a href="" className='fontSizeAndWeight'>Mobile Apps</a></h4>
                                    <p>We leverage the latest cutting-edge technology stack to make scalable, reliable, world-class apps for any mobile OS.</p>
                                </div>
                            </div>

                            <div className="col-md-4 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
                                <div className="icon-box">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="#37517e" d="M6 7h8v2H6zm0 4h12v2H6zm0 4h2.99v2H6z" />
                                            <path fill="#37517e" d="m14 3l-3-3v2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4v-2H4V4h7v2Zm-4 18l3 3v-2h7a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-4v2h4v16h-7v-2Z" /></svg>

                                    </div>
                                    <h4><a href="" className='fontSizeAndWeight'>Maintenance</a></h4>
                                    <p>Minimize downtime and ensure business continuation with round-the-clock monitoring and maintenance.</p>
                                </div>
                            </div>

                        </div>



                        <div className="row">
                            <div className="col-md-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                <div className="icon-box">
                                    <div className="icon">

                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="#37517e" d="M4 21q-.825 0-1.413-.588T2 19V8q0-.825.588-1.413T4 6h4V4q0-.825.588-1.413T10 2h4q.825 0 1.413.588T16 4v2h4q.825 0 1.413.588T22 8v11q0 .825-.588 1.413T20 21H4Zm6-15h4V4h-4v2Z" /></svg>

                                    </div>
                                    <h4><a href="" className='fontSizeAndWeight'>Resource Hiring & Staffing</a></h4>
                                    <p>Develop new digital solutions without having to build an in-house team by hiring our expert developers.</p>
                                </div>
                            </div>

                            <div className="col-md-4 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                                <div className="icon-box">
                                    <div className="icon">

                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="none" stroke="#37517e" stroke-linejoin="round" stroke-width="4">
                                            <path d="M19 32c-7.732 0-14-6.268-14-14S11.268 4 19 4s14 6.268 14 14" /><path d="M44 18H18v26h26V18Z" /></g></svg>
                                    </div>
                                    <h4><a href="" className='fontSizeAndWeight'>Design</a></h4>

                                    <p>Create flawless UI/UX designs that engages your users with our award-winning team of designers.</p>
                                </div>
                            </div>

                            <div className="col-md-4 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
                                <div className="icon-box">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                                            <mask id="ipSFileQualityOne0"><g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="M40 23v-9L31 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12" />
                                                <path fill="#fff" d="M28.2 30h9.6l3.2 4.118L33 44l-8-9.882L28.2 30Z" /><path d="M30 4v10h10" /></g></mask>
                                            <path fill="#37517e" d="M0 0h48v48H0z" mask="url(#ipSFileQualityOne0)" /></svg>

                                    </div>
                                    <h4><a href="" className='fontSizeAndWeight'>Software Quality Assurance & Testing</a></h4>
                                    <p>Test and ensure the quality of your existing and new software with our experienced QA engineers.</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

                <section id="cta" className="cta">
                    <div className="container" data-aos="zoom-in">

                        <div className="row">
                            <div className="col-lg-9 text-center text-lg-start">
                                <h3>Call To Action</h3>
                                <p>Every Successful Project Starts With a Word. Request a Demo and checkout Our Software Services in Action. Tailored Solutions for You.</p>
                            </div>
                            <div className="col-lg-3 cta-btn-container text-center">
                                <a className="cta-btn align-middle" href="#">Call To Action</a>
                            </div>
                        </div>

                    </div>
                </section>

                <section id="portfolio" className="portfolio">
                    <div className="container" data-aos="fade-up">

                        <div className="section-title">
                            <h2>Portfolio</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <ul id="portfolio-flters" className="d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".filter-app">App</li>
                            <li data-filter=".filter-card">Card</li>
                            <li data-filter=".filter-web">Web</li>
                        </ul>



                    </div>
                </section>

                <section id="team" className="team section-bg">
                    <div className="container" data-aos="fade-up">

                        <div className="section-title">
                            <h2>Team</h2>
                            <p>"Exemplary Portfolio: Showcasing Our Diverse Achievements.</p>
                        </div>

                        <div className="row">

                            <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="100">
                                <div className="member d-flex align-items-start">
                                    <div className="pic"><img src="assets/img/team/team-1.jpg" className="img-fluid" alt="" /></div>
                                    <div className="member-info">
                                        <h4>Ricky Dheeraj Sharma</h4>
                                        <span>Chief Executive Officer</span>
                                        <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                                        <div className="social">
                                            <a href=""><i className="ri-twitter-fill"></i></a>
                                            <a href=""><i className="ri-facebook-fill"></i></a>
                                            <a href=""><i className="ri-instagram-fill"></i></a>
                                            <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="200">
                                <div className="member d-flex align-items-start">
                                    <div className="pic"><img src="assets/img/team/team-2.jpg" className="img-fluid" alt="" /></div>
                                    <div className="member-info">
                                        <h4>Princy Goel</h4>
                                        <span>Product Manager</span>
                                        <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                                        <div className="social">
                                            <a href=""><i className="ri-twitter-fill"></i></a>
                                            <a href=""><i className="ri-facebook-fill"></i></a>
                                            <a href=""><i className="ri-instagram-fill"></i></a>
                                            <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="300">
                                <div className="member d-flex align-items-start">
                                    <div className="pic"><img src="assets/img/team/team-3.jpg" className="img-fluid" alt="" /></div>
                                    <div className="member-info">
                                        <h4>Shivam Pandey</h4>
                                        <span>CTO</span>
                                        <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                                        <div className="social">
                                            <a href=""><i className="ri-twitter-fill"></i></a>
                                            <a href=""><i className="ri-facebook-fill"></i></a>
                                            <a href=""><i className="ri-instagram-fill"></i></a>
                                            <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="400">
                                <div className="member d-flex align-items-start">
                                    <div className="pic"><img src="assets/img/team/team-4.jpg" className="img-fluid" alt="" /></div>
                                    <div className="member-info">
                                        <h4>Prayga Singh</h4>
                                        <span>Accountant</span>
                                        <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                                        <div className="social">
                                            <a href=""><i className="ri-twitter-fill"></i></a>
                                            <a href=""><i className="ri-facebook-fill"></i></a>
                                            <a href=""><i className="ri-instagram-fill"></i></a>
                                            <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>




                <section id="contact" className="contact">
                    <div className="container" data-aos="fade-up">

                        <div className="section-title">
                            <h2>Contact</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <div className="row">

                            <div className="col-lg-5 d-flex align-items-stretch">
                                <div className="info">
                                    <div className="address">
                                        <i className="bi bi-geo-alt"></i>
                                        <h4>Location:</h4>
                                        <p>MG Street, Noida, 201301, India ( Bharat )</p>
                                    </div>

                                    <div className="email">
                                        <i className="bi bi-envelope"></i>
                                        <h4>Email:</h4>
                                        <p>info@ingemstechnology.com</p>
                                    </div>

                                    <div className="phone">
                                        <i className="bi bi-phone"></i>
                                        <h4>Call:</h4>
                                        <p>+1 001 002 003</p>
                                    </div>

                                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder="0" style={{ 'border': 0, 'width': '100%', 'height': '290px' }} allowFullScreen></iframe>
                                </div>

                            </div>

                            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                                <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="name">Your Name</label>
                                            <input type="text" name="name" className="form-control" id="name" required />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="name">Your Email</label>
                                            <input type="email" className="form-control" name="email" id="email" required />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Subject</label>
                                        <input type="text" className="form-control" name="subject" id="subject" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Message</label>
                                        <textarea className="form-control" name="message" rows="10" required></textarea>
                                    </div>
                                    <div className="my-3">
                                        <div className="loading">Loading</div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">Your message has been sent. Thank you!</div>
                                    </div>
                                    <div className="text-center"><button type="submit">Send Message</button></div>
                                </form>
                            </div>

                        </div>

                    </div>
                </section>
            </main>


            <footer id="footer">


                <div className="footer-newsletter">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <h4>Join Our Newsletter</h4>
                                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                                <form action="" method="post">
                                    <input type="email" name="email" /><input type="submit" value="Subscribe" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-top">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h3>Ingems Technology</h3>
                                MG Street
                                <br />
                                Noida, 201301<br />
                                India ( Bharat ) <br /><br />
                                <strong>Phone:</strong> +1 001 002 003<br />
                                <strong>Email:</strong> info@ingemstechnology.com<br />

                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Social Networks</h4>
                                <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                                <div className="social-links mt-3">
                                    <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                                    <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                                    <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                                    <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                                    <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container footer-bottom clearfix">
                    <div className="copyright">
                        &copy; Copyright <strong><span>Ingems Technology</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                        Designed by <a href="#">Ingems Technology</a>
                    </div>
                </div>
            </footer>

        </div>
    )
}
