<template>
  <div>
    <link rel="stylesheet" href="frontend.css">
    <!--====== HEADER PART START ======-->
      <header class="header-area">
          <div class="navgition navgition-transparent">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-12">
                          <nav class="navbar navbar-expand-lg">
                              <a class="navbar-brand" href="#">
                                  <img src="images/atomichabits.svg" alt="Logo" width="200px" height="48px">
                              </a>

                              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarOne" aria-controls="navbarOne" aria-expanded="false" aria-label="Toggle navigation">
                                  <span class="toggler-icon"></span>
                                  <span class="toggler-icon"></span>
                                  <span class="toggler-icon"></span>
                              </button>

                              <div class="collapse navbar-collapse sub-menu-bar" id="navbarOne">
                                  <ul class="navbar-nav m-auto">
                                      <li class="nav-item active">
                                          <a class="page-scroll" href="#home">HOME</a>
                                      </li>
                                      <li class="nav-item">
                                          <a class="page-scroll" href="#features">FEATURES</a>
                                      </li>
                                      <li class="nav-item">
                                          <a class="page-scroll" href="#pricing">PRICING</a>
                                      </li>
                                      <li class="nav-item">
                                          <a class="page-scroll" href="#contact">CONTACT</a>
                                      </li>
                                  </ul>
                              </div>

                              <div class="navbar-social d-none d-sm-flex align-items-center">
                                  <span>FOLLOW US</span>
                                  <ul>
                                      <li><a href="#"><i class="lni-facebook-filled"></i></a></li>
                                      <li><a href="#"><i class="lni-twitter-original"></i></a></li>
                                      <li><a href="#"><i class="lni-instagram-original"></i></a></li>
                                      <li><a href="#"><i class="lni-linkedin-original"></i></a></li>                                  
                                  </ul>
                              </div>
                          </nav> <!-- navbar -->
                      </div>
                  </div> <!-- row -->
              </div> <!-- container -->
          </div> <!-- navgition -->

          <div id="home" class="header-hero bg_cover" style="background-image: url(images/header-bg.jpg)">
              <div class="container">
                  <div class="row justify-content-center">
                      <div class="col-xl-8 col-lg-10">
                          <div class="header-content text-center">
                              <h3 class="header-title">Privacy Centric Habits Journal</h3>
                              <p class="text">Atomichabits lets you keep a journal of your habits and nudges you to get them done.</p>
                              <ul class="header-btn">
                                  <li><a class="main-btn btn-one" href="#" @click="signIn">Login with blockstack</a></li>
                              </ul>
                          </div> <!-- header content -->
                      </div>
                  </div> <!-- row -->
              </div> <!-- container -->
              <div class="header-shape">
                  <img src="images/header-shape.svg" alt="shape">
              </div>
          </div> <!-- header content -->
      </header>

      <!--====== HEADER PART ENDS ======-->

      <!--====== SERVICES PART START ======-->

      <section id="features" class="services-area">
          <div class="container">
              <div class="row">
                  <div class="col-lg-6">
                      <div class="section-title pb-10">
                          <h4 class="title">Upcoming features</h4>
                          <p class="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
                      </div> <!-- section title -->
                  </div>
              </div> <!-- row -->
              <div class="row">
                  <div class="col-lg-8">
                      <div class="row">
                          <div class="col-md-6">
                              <div class="services-content mt-40 d-sm-flex">
                                  <div class="services-icon">
                                      <i class="lni-bolt"></i>
                                  </div>
                                  <div class="services-content media-body">
                                      <h4 class="services-title">Startup</h4>
                                      <p class="text">Short description for the ones</br> who look for something new.</p>
                                  </div>
                              </div> <!-- services content -->
                          </div>
                          <div class="col-md-6">
                              <div class="services-content mt-40 d-sm-flex">
                                  <div class="services-icon">
                                      <i class="lni-bar-chart"></i>
                                  </div>
                                  <div class="services-content media-body">
                                      <h4 class="services-title">SaaS Business</h4>
                                      <p class="text">Short description for the ones</br> who look for something new.</p>
                                  </div>
                              </div> <!-- services content -->
                          </div>
                          <div class="col-md-6">
                              <div class="services-content mt-40 d-sm-flex">
                                  <div class="services-icon">
                                      <i class="lni-brush"></i>
                                  </div>
                                  <div class="services-content media-body">
                                      <h4 class="services-title">Agency</h4>
                                      <p class="text">Short description for the ones</br> who look for something new.</p>
                                  </div>
                              </div> <!-- services content -->
                          </div>
                          <div class="col-md-6">
                              <div class="services-content mt-40 d-sm-flex">
                                  <div class="services-icon">
                                      <i class="lni-bulb"></i>
                                  </div>
                                  <div class="services-content media-body">
                                      <h4 class="services-title">App Landing</h4>
                                      <p class="text">Short description for the ones</br> who look for something new.</p>
                                  </div>
                              </div> <!-- services content -->
                          </div>
                      </div> <!-- row -->
                  </div> <!-- row -->
              </div> <!-- row -->
          </div> <!-- conteiner -->
          <div class="services-image d-lg-flex align-items-center">
              <div class="image">
                  <img src="images/services.png" alt="Services">
              </div>
          </div> <!-- services image -->
      </section>

      <!--====== SERVICES PART ENDS ======-->

      <!--====== PRICING PART START ======-->

      <section id="pricing" class="pricing-area">
          <div class="container">
              <div class="row justify-content-center">
                  <div class="col-lg-12">
                      <div class="section-title text-right pb-10">
                          <h4 class="title">Our Pricing</h4>
                          <p class="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
                      </div> <!-- section title -->
                  </div>
              </div> <!-- row -->
              <div class="row justify-content-center">
                  <div class="col-lg-4 col-md-7 col-sm-9">
                      <div class="single-pricing mt-40">
                          <div class="pricing-header text-center">
                              <h5 class="sub-title">Basic</h5>
                              <span class="price">$ 199</span>
                              <p class="year">per year</p>
                          </div>
                          <div class="pricing-list">
                              <ul>
                                  <li><i class="lni-check-mark-circle"></i> Carefully crafted components</li>
                                  <li><i class="lni-check-mark-circle"></i> Amazing page examples</li>
                                  <li><i class="lni-check-mark-circle"></i> Super friendly support team</li>
                                  <li><i class="lni-check-mark-circle"></i> Awesome Support</li>
                              </ul>
                          </div>
                          <div class="pricing-btn text-center">
                              <a class="main-btn" href="#">GET STARTED</a>
                          </div>
                          <div class="buttom-shape">
                              <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 112.35"><defs><style>.color-1{fill:#2bdbdc;isolation:isolate;}.cls-1{opacity:0.1;}.cls-2{opacity:0.2;}.cls-3{opacity:0.4;}.cls-4{opacity:0.6;}</style></defs><title>bottom-part1</title><g id="bottom-part"><g id="Group_747" data-name="Group 747"><path id="Path_294" data-name="Path 294" class="cls-1 color-1" d="M0,24.21c120-55.74,214.32,2.57,267,0S349.18,7.4,349.18,7.4V82.35H0Z" transform="translate(0 0)"/><path id="Path_297" data-name="Path 297" class="cls-2 color-1" d="M350,34.21c-120-55.74-214.32,2.57-267,0S.82,17.4.82,17.4V92.35H350Z" transform="translate(0 0)"/><path id="Path_296" data-name="Path 296" class="cls-3 color-1" d="M0,44.21c120-55.74,214.32,2.57,267,0S349.18,27.4,349.18,27.4v74.95H0Z" transform="translate(0 0)"/><path id="Path_295" data-name="Path 295" class="cls-4 color-1" d="M349.17,54.21c-120-55.74-214.32,2.57-267,0S0,37.4,0,37.4v74.95H349.17Z" transform="translate(0 0)"/></g></g></svg>
                          </div>
                      </div> <!-- single pricing -->
                  </div>
                  
                  <div class="col-lg-4 col-md-7 col-sm-9">
                      <div class="single-pricing pro mt-40">
                          <div class="pricing-baloon">
                              <img src="images/baloon.svg" alt="baloon">
                          </div>
                          <div class="pricing-header">
                              <h5 class="sub-title">Pro</h5>
                              <span class="price">$ 399</span>
                              <p class="year">per year</p>
                          </div>
                          <div class="pricing-list">
                              <ul>
                                  <li><i class="lni-check-mark-circle"></i> Carefully crafted components</li>
                                  <li><i class="lni-check-mark-circle"></i> Amazing page examples</li>
                                  <li><i class="lni-check-mark-circle"></i> Super friendly support team</li>
                                  <li><i class="lni-check-mark-circle"></i> Awesome Support</li>
                              </ul>
                          </div>
                          <div class="pricing-btn text-center">
                              <a class="main-btn" href="#">GET STARTED</a>
                          </div>
                          <div class="buttom-shape">
                              <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 112.35"><defs><style>.color-2{fill:#0067f4;isolation:isolate;}.cls-1{opacity:0.1;}.cls-2{opacity:0.2;}.cls-3{opacity:0.4;}.cls-4{opacity:0.6;}</style></defs><title>bottom-part1</title><g id="bottom-part"><g id="Group_747" data-name="Group 747"><path id="Path_294" data-name="Path 294" class="cls-1 color-2" d="M0,24.21c120-55.74,214.32,2.57,267,0S349.18,7.4,349.18,7.4V82.35H0Z" transform="translate(0 0)"/><path id="Path_297" data-name="Path 297" class="cls-2 color-2" d="M350,34.21c-120-55.74-214.32,2.57-267,0S.82,17.4.82,17.4V92.35H350Z" transform="translate(0 0)"/><path id="Path_296" data-name="Path 296" class="cls-3 color-2" d="M0,44.21c120-55.74,214.32,2.57,267,0S349.18,27.4,349.18,27.4v74.95H0Z" transform="translate(0 0)"/><path id="Path_295" data-name="Path 295" class="cls-4 color-2" d="M349.17,54.21c-120-55.74-214.32,2.57-267,0S0,37.4,0,37.4v74.95H349.17Z" transform="translate(0 0)"/></g></g></svg>
                          </div>
                      </div> <!-- single pricing -->
                  </div>
                  
                  <div class="col-lg-4 col-md-7 col-sm-9">
                      <div class="single-pricing enterprise mt-40">
                          <div class="pricing-flower">
                              <img src="images/flower.svg" alt="flower">
                          </div>
                          <div class="pricing-header text-right">
                              <h5 class="sub-title">Enterprise</h5>
                              <span class="price">$ 799</span>
                              <p class="year">per year</p>
                          </div>
                          <div class="pricing-list">
                              <ul>
                                  <li><i class="lni-check-mark-circle"></i> Carefully crafted components</li>
                                  <li><i class="lni-check-mark-circle"></i> Amazing page examples</li>
                                  <li><i class="lni-check-mark-circle"></i> Super friendly support team</li>
                                  <li><i class="lni-check-mark-circle"></i> Awesome Support</li>
                              </ul>
                          </div>
                          <div class="pricing-btn text-center">
                              <a class="main-btn" href="#">GET STARTED</a>
                          </div>
                          <div class="buttom-shape">
                              <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 112.35"><defs><style>.color-3{fill:#4da422;isolation:isolate;}.cls-1{opacity:0.1;}.cls-2{opacity:0.2;}.cls-3{opacity:0.4;}.cls-4{opacity:0.6;}</style></defs><title>bottom-part1</title><g id="bottom-part"><g id="Group_747" data-name="Group 747"><path id="Path_294" data-name="Path 294" class="cls-1 color-3" d="M0,24.21c120-55.74,214.32,2.57,267,0S349.18,7.4,349.18,7.4V82.35H0Z" transform="translate(0 0)"/><path id="Path_297" data-name="Path 297" class="cls-2 color-3" d="M350,34.21c-120-55.74-214.32,2.57-267,0S.82,17.4.82,17.4V92.35H350Z" transform="translate(0 0)"/><path id="Path_296" data-name="Path 296" class="cls-3 color-3" d="M0,44.21c120-55.74,214.32,2.57,267,0S349.18,27.4,349.18,27.4v74.95H0Z" transform="translate(0 0)"/><path id="Path_295" data-name="Path 295" class="cls-4 color-3" d="M349.17,54.21c-120-55.74-214.32,2.57-267,0S0,37.4,0,37.4v74.95H349.17Z" transform="translate(0 0)"/></g></g></svg>
                          </div>
                      </div> <!-- single pricing -->
                  </div>
              </div> <!-- row -->
          </div> <!-- conteiner -->
      </section>

      <!--====== PRICING PART ENDS ======-->
      
      <!--====== CALL TO ACTION PART START ======-->

      <section id="call-to-action" class="call-to-action">
          <div class="call-action-image">
              <img src="images/call-to-action.png" alt="call-to-action">
          </div>
          
          <div class="container-fluid">
              <div class="row justify-content-end">
                  <div class="col-lg-6">
                      <div class="call-action-content text-center">
                          <h2 class="call-title">Curious to Learn More? Stay Tuned</h2>
                          <p class="text">You let us know whenever you want us to update anything or think something can be optimised.</p>
                          <div class="call-newsletter">
                              <i class="lni-envelope"></i>
                              <input type="text" placeholder="john@email.com">
                              <button type="submit">SUBSCRIBE</button>
                          </div>
                      </div> <!-- slider-content -->
                  </div>
              </div> <!-- row -->
          </div> <!-- container -->
      </section>

      <!--====== CALL TO ACTION PART ENDS ======-->
      
      <!--====== CONTACT PART START ======-->

      <section id="contact" class="contact-area">
          <div class="container">
              <div class="row justify-content-center">
                  <div class="col-lg-6">
                      <div class="section-title text-center pb-10">
                          <h4 class="title">Get In touch</h4>
                          <p class="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
                      </div> <!-- section title -->
                  </div>
              </div> <!-- row -->
              <div class="row justify-content-center">
                  <div class="col-lg-8">
                      <div class="contact-form">
                          <form id="contact-form" action="contact.php" method="post" data-toggle="validator">
                              <div class="row">
                                  <div class="col-md-6">
                                      <div class="single-form form-group">
                                          <input type="text" name="name" placeholder="Your Name" data-error="Name is required." required="required">
                                          <div class="help-block with-errors"></div>
                                      </div> <!-- single form -->
                                  </div>
                                  <div class="col-md-6">
                                      <div class="single-form form-group">
                                          <input type="email" name="email" placeholder="Your Email" data-error="Valid email is required." required="required">
                                          <div class="help-block with-errors"></div>
                                      </div> <!-- single form -->
                                  </div>
                                  <div class="col-md-6">
                                      <div class="single-form form-group">
                                          <input type="text" name="subject" placeholder="Subject" data-error="Subject is required." required="required">
                                          <div class="help-block with-errors"></div>
                                      </div> <!-- single form -->
                                  </div>
                                  <div class="col-md-6">
                                      <div class="single-form form-group">
                                          <input type="text" name="phone" placeholder="Phone" data-error="Phone is required." required="required">
                                          <div class="help-block with-errors"></div>
                                      </div> <!-- single form -->
                                  </div>
                                  <div class="col-md-12">
                                      <div class="single-form form-group">
                                          <textarea placeholder="Your Mesaage" name="message" data-error="Please, leave us a message." required="required"></textarea>
                                          <div class="help-block with-errors"></div>
                                      </div> <!-- single form -->
                                  </div>
                                  <p class="form-message"></p>
                                  <div class="col-md-12">
                                      <div class="single-form form-group text-center">
                                          <button type="submit" class="main-btn">send message</button>
                                      </div> <!-- single form -->
                                  </div>
                              </div> <!-- row -->
                          </form>
                      </div> <!-- row -->
                  </div>
              </div> <!-- row -->
          </div> <!-- conteiner -->
      </section>

      <!--====== CONTACT PART ENDS ======-->

      <!--====== FOOTER PART START ======-->

      <footer id="footer" class="footer-area">
          <div class="footer-widget">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-12">
                          <div class="footer-logo-support d-md-flex align-items-end justify-content-between">
                              <div class="footer-logo d-flex align-items-end">
                                  <img src="images/cans.svg" alt="Logo" height="48px">

                                  <ul class="social mt-30">
                                      <li><a href="#"><i class="lni-facebook-filled"></i></a></li>
                                      <li><a href="#"><i class="lni-twitter-original"></i></a></li>
                                      <li><a href="#"><i class="lni-instagram-original"></i></a></li>
                                      <li><a href="#"><i class="lni-linkedin-original"></i></a></li>
                                  </ul>
                              </div> <!-- footer logo -->
                              
                          </div> <!-- footer logo support -->
                      </div>
                  </div> <!-- row -->
                  <div class="row">
                      <div class="col-lg-4 col-md-6 col-sm-7">
                          <div class="footer-link">
                              <h6 class="footer-title">Company</h6>
                              <ul>
                                  <li><a href="#">About</a></li>
                                  <li><a href="#">Contact</a></li>
                                  <li><a href="#">Career</a></li>
                              </ul>
                          </div> <!-- footer link -->
                      </div>
                      <div class="col-lg-4 col-md-6 col-sm-7">
                          <div class="footer-link">
                              <h6 class="footer-title">Help & Support</h6>
                              <ul>
                                  <li><a href="#">Support Center</a></li>
                                  <li><a href="#">FAQ</a></li>
                                  <li><a href="#">Terms & Conditions</a></li>
                              </ul>
                          </div> <!-- footer link -->
                      </div>
                      <div class="col-lg-4 col-md-6 col-sm-7">
                          <div class="footer-link">
                              <h6 class="footer-title">Community Credits</h6>
                              <ul>
                                  <li><a rel="nofollow" href="https://blockstack.org/" target="_blank">Blockstack.org</a></li>
                                  <li><a rel="nofollow" href="https://uideck.com/" target="_blank">UIdeck &amp; AyroUI</a></li>
                                  <li><a rel="nofollow" href="https://vue.ant.design/docs/vue/introduce/" target="_blank">Antd Vue Components</a></li>
                                  <li>Icon made by <a rel="nofollow" href="https://www.flaticon.com/authors/freepik/" target="_blank">freepik</a> from <a rel="nofollow" href="https://www.flaticon.com" target="_blank">flaticon</a></li>
                              </ul> <!-- footer link -->
                          </div>
                      </div>
                  </div> <!-- row -->
              </div> <!-- container -->
          </div> <!-- footer widget -->
          
          <div class="footer-copyright">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-12">
                          <div class="copyright text-center">
                              <p class="text">Atomic Habits 2019 :: Powered by <a rel="nofollow" href="https://blockstack.org/" target="_blank">Blockstack</a></p>
                          </div>
                      </div>
                  </div> <!-- row -->
              </div> <!-- container -->
          </div> <!-- footer copyright -->
      </footer>

      <!--====== FOOTER PART ENDS ======-->

      <!--====== BACK TO TOP PART START ======-->

      <a class="back-to-top" href="#"><i class="lni-chevron-up"></i></a>

      <!--====== BACK TO TOP PART ENDS ======-->
      <script src="frontend.js"></script>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'landing',
  layout: 'simple',
  computed: mapGetters([
    'isAuthenticated',
    'loggedUser'
  ]),
  beforeMount () {
    if(this.loggedUser.isUserSignedIn()) {
      this.redirectLoggedInUser();
    } else if (this.loggedUser.isSignInPending()) {
      this.loggedUser.handlePendingSignIn().then((userData) => {
        this.redirectLoggedInUser();
      });
    }
  },
  methods: {
    signIn () {
      this.loggedUser.redirectToSignIn()
    },
    redirectLoggedInUser() {
      window.location = `/home`;
    }
  }
};
</script>

<style>
.header-hero .header-content .header-btn li a.main-btn.btn-one::before {
  background: url('/images/blockstack.png') left no-repeat !important;
  background-size: contain !important;
}
.header-hero .header-content .header-btn li a.main-btn {
  width: -webkit-fill-available  !important;
  padding-left: 55px  !important;
  background-color: #1f1f6c !important;
}
.btn-one {
  border: 5px solid !important;
  
}
</style>