<template>
  <div>
    <!-- <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"> -->
    <!-- <meta name="msapplication-TileColor" content="#ffffff"> -->
    <!-- <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"> -->
    <!-- <meta name="theme-color" content="#ffffff"> -->
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


      <!--====== FEATURES PART START ======-->

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
                                      <p class="text">Short description for the <br/> who look for something new.</p>
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
                                      <p class="text">Short description for the <br/> who look for something new.</p>
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
                                      <p class="text">Short description for the <br/> who look for something new.</p>
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
                                      <p class="text">Short description for the <br/> who look for something new.</p>
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

      <!--====== FEATURES PART ENDS ======-->


      <!--====== SECTION 2 PART START ======-->

      <section id="section-2" class="pricing-area"> 
          <div class="container">
              <div class="row">
                <div class="col-lg-4">
                  <div class="image">
                    <img src="images/services.png" alt="Services">
                  </div>
                </div>
                  <div class="col-lg-8">
                      <div class="row">
                          <div class="col-md-6">
                              <div class="services-content mt-40 d-sm-flex">
                                  <div class="services-icon">
                                      <i class="lni-bolt"></i>
                                  </div>
                                  <div class="services-content media-body">
                                      <h4 class="services-title">Startup</h4>
                                      <p class="text">Short description for the <br/> who look for something new.</p>
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
                                      <p class="text">Short description for the <br/> who look for something new.</p>
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
                                      <p class="text">Short description for the <br/> who look for something new.</p>
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
                                      <p class="text">Short description for the <br/> who look for something new.</p>
                                  </div>
                              </div> <!-- services content -->
                          </div>
                      </div> <!-- row -->
                  </div> <!-- row -->
              </div> <!-- row -->
          </div> <!-- conteiner -->
      </section>

      <!--====== SECTION 2 PART ENDS ======-->


      <!--====== SECTION 3 PART START ======-->

      <section id="section-3" class="padded bg-white"> 
          <div class="container">
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
                                      <p class="text">Short description for the <br/> who look for something new.</p>
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
                                      <p class="text">Short description for the <br/> who look for something new.</p>
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
                                      <p class="text">Short description for the <br/> who look for something new.</p>
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
                                      <p class="text">Short description for the <br/> who look for something new.</p>
                                  </div>
                              </div> <!-- services content -->
                          </div>
                      </div> <!-- row -->
                  </div> <!-- row -->
                  <div class="col-lg-4">
                    <div class="image">
                      <img src="images/services.png" alt="Services">
                    </div>
                  </div>
              </div> <!-- row -->
          </div> <!-- conteiner -->
      </section>

      <!--====== SECTION 3 PART ENDS ======-->
      
      <!--====== SECTION 4 PART START ======-->

      <section id="section-4" class="padded bg-light"> 
          <div class="container">
              <div class="row">
                <div class="col-lg-4">
                  <div class="image">
                    <img src="images/services.png" alt="Services">
                  </div>
                </div>
                  <div class="col-lg-8">
                      <div class="row">
                          <div class="col-md-6">
                              <div class="services-content mt-40 d-sm-flex">
                                  <div class="services-icon">
                                      <i class="lni-bolt"></i>
                                  </div>
                                  <div class="services-content media-body">
                                      <h4 class="services-title">Startup</h4>
                                      <p class="text">Short description for the <br/> who look for something new.</p>
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
                                      <p class="text">Short description for the <br/> who look for something new.</p>
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
                                      <p class="text">Short description for the <br/> who look for something new.</p>
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
                                      <p class="text">Short description for the <br/> who look for something new.</p>
                                  </div>
                              </div> <!-- services content -->
                          </div>
                      </div> <!-- row -->
                  </div> <!-- row -->
              </div> <!-- row -->
          </div> <!-- conteiner -->
      </section>
      <!--====== SECTION 4 PART START ======-->

      <!--====== UPCOMING FEATURES PART START ======-->

      <section id="upcoming-features" class="padded bg-white services-area">
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
                                      <p class="text">Short description for the <br/> who look for something new.</p>
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
                                      <p class="text">Short description for the <br/> who look for something new.</p>
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
                                      <p class="text">Short description for the <br/> who look for something new.</p>
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
                                      <p class="text">Short description for the <br/> who look for something new.</p>
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

      <!--====== UPCOMING FEATURES PART START ======-->


      <!--====== FOOTER PART START ======-->

      <footer id="footer" class="footer-area">
          <div class="footer-widget">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-12">
                          <div class="footer-logo-support d-md-flex align-items-end justify-content-between">
                              <div class="footer-logo d-flex align-items-end">
                                  <img src="images/atomichabits.svg" alt="Logo" width="200px" height="48px">
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
.header-hero .header-content .text {
  color: #0067f4 !important;
}
.header-hero::before {
background: -webkit-linear-gradient(#e8edffe6, #effeffe6 50%, #ffffff1f, #ffffff1f);
background: -o-linear-gradient(#e8edffe6, #effeffe6 50%, #ffffff1f, #ffffff1f);
background: linear-gradient(#e8edffe6, #effeffe6 50%, #ffffff1f, #ffffff1f) !important;
}
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
.padded {
  padding-top: 120px;
  padding-bottom: 120px;
}
.bg-light {
  background-color: #f4f6f7;
}
</style>