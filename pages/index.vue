<template>
  <div id="main" class="hidden">
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
                                      <li class="nav-item">
                                          <a class="page-scroll" href="#home">HOME</a>
                                      </li>
                                      <li class="nav-item">
                                          <a class="page-scroll" href="#features">FEATURES</a>
                                      </li>
                                      <li class="nav-item">
                                          <a class="page-scroll" href="#roadmap">RAODMAP</a>
                                      </li>
                                      <li class="nav-item">
                                          <a class="page-scroll" href="#footer">CREDITS</a>
                                      </li>
                                  </ul>
                              </div>

                              <div class="navbar-social d-none d-sm-flex align-items-center">
                                  <span>FOLLOW US</span>
                                  <ul>
                                      <li><a href="https://www.facebook.com/atomichabitsdapp" target="_blank"><i class="lni-facebook-filled"></i></a></li>
                                      <li><a href="https://twitter.com/getatomichabits" target="_blank"><i class="lni-twitter-original"></i></a></li>
                                      <li><a href="#" target="_blank"><i class="lni-instagram-original"></i></a></li>                                 
                                  </ul>
                              </div>
                          </nav> 
                      </div>
                  </div> 
              </div> 
          </div>

          <div id="home" class="header-hero bg_cover" style="background-image: url(images/header-bg-min.png)">
              <div class="container">
                  <div class="row justify-content-center">
                      <div class="col-xl-8 col-lg-10">
                          <div class="header-content text-center">
                              <h3 class="header-title">Privacy Centric Habits Journal</h3>
                              <p class="text">Atomichabits lets you keep a journal of your habits and track them within your very own secure de-centralized and blockchain</p>
                              <ul class="header-btn">
                                  <li><a class="main-btn btn-one" href="#" @click="signIn">Login with blockstack</a></li>
                              </ul>
                          </div> 
                      </div>
                  </div> 
              </div> 
              <div class="header-shape">
                  <img src="images/header-shape.svg" alt="shape">
              </div>
          </div> 
      </header>

      <!--====== HEADER PART ENDS ======-->


      <!--====== FEATURES PART START ======-->

      <section id="features" class="services-area">
          <div class="container">
              <div class="row">
                  <div class="col-lg-6">
                      <div class="section-title pb-10">
                          <h4 class="title">More power to you</h4>
                          <p class="text">Information regarding your habits reveals who you are. It's time only you own it.</p>
                      </div> 
                  </div>
              </div> 
              <div class="row">
                  <div class="col-lg-8">
                      <div class="row">
                          <div class="col-md-12">
                              <div class="services-content mt-40 d-sm-flex">
                                  <div class="services-icon">
                                      <i class="lni-certificate"></i>
                                  </div>
                                  <div class="services-content media-body">
                                      <h4 class="services-title">Privacy first habit tracking &amp; journaling</h4>
                                      <p class="text">Information about people's habits can be used by tech giants for advertisment purposes to generate revenue. Secure your data on the blockchain only visible to you.</p>
                                  </div>
                              </div> 
                          </div>
                          <div class="col-md-12">
                              <div class="services-content mt-40 d-sm-flex">
                                  <div class="services-icon">
                                      <i class="lni-check-mark-circle"></i>
                                  </div>
                                  <div class="services-content media-body">
                                      <h4 class="services-title">Trackable routines</h4>
                                      <p class="text">Stay on top of your daily routines. Habits can even be created / tracked by timelines.</p>
                                  </div>
                              </div> 
                          </div>
                          <div class="col-md-12">
                              <div class="services-content mt-40 d-sm-flex">
                                  <div class="services-icon">
                                      <i class="lni-spinner-arrow"></i>
                                  </div>
                                  <div class="services-content media-body">
                                      <h4 class="services-title">Reapatable habit tracking</h4>
                                      <p class="text">Stay on top of your daily routines. Habits can even be created / tracked by timelines.</p>
                                  </div>
                              </div> 
                          </div>
                      </div> 
                  </div> 
              </div> 
          </div> 
          <div class="services-image d-lg-flex align-items-center">
              <div class="image">
                  <img src="images/taxi.png" alt="More power to you">
              </div>
          </div> 
      </section>

      <!--====== FEATURES PART ENDS ======-->


      <!--====== UPCOMING FEATURES PART START ======-->

      <section id="roadmap" class="padded bg-light services-area">
          <div class="container">
              <div class="row">
                  <div class="col-lg-6">
                      <div class="section-title pb-10">
                          <h4 class="title">Upcoming features</h4>
                          <p class="text">Our product roadmap to bestow superpowers to you !</p>
                      </div> 
                  </div>
              </div> 
              <div class="row">
                  <div class="col-lg-8">

                    <div class="row">
                        <div class="col-md-12">
                            <div class="services-content mt-40 d-sm-flex">
                                <div class="services-icon">
                                    <i class="lni-bolt"></i>
                                </div>
                                <div class="services-content media-body">
                                    <h4 class="services-title">Desktop-only Nudge Notifications</h4>
                                    <p class="text">Nudge / notifies about upcoming task as per your timezone <br/> Is mobile push notifications deviating your focus! we have you back.</p>
                                </div>
                            </div> 
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <div class="services-content mt-40 d-sm-flex">
                                <div class="services-icon">
                                    <i class="lni-dashboard"></i>
                                </div>
                                <div class="services-content media-body">
                                    <h4 class="services-title">Intutive dashboard</h4>
                                    <p class="text">Dashboard which shows your accomplishments and statistics dice and slice data <br/>to get more insights about your daily habits.</p>
                                </div>
                            </div> 
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <div class="services-content mt-40 d-sm-flex">
                                <div class="services-icon">
                                    <i class="lni-code-alt"></i>
                                </div>
                                <div class="services-content media-body">
                                    <h4 class="services-title">Automated key-stone habit finder</h4>
                                    <p class="text">Just keep using, our system will automagically find and suggets your keystone habtis. <br/> All this magic when your data is only readable by you!!</p>
                                </div>
                            </div> 
                        </div>
                    </div>
                    
                  </div> 
              </div> 
          </div> 
          <div class="services-image d-lg-flex align-items-center">
              <div class="image">
                  <img src="images/taxi-delivery.png" alt="Upcoming features">
              </div>
          </div> 
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
                                  <ul class="social mt-30">
                                        <li><a href="https://www.facebook.com/atomichabitsdapp" target="_blank"><i class="lni-facebook-filled"></i></a></li>
                                        <li><a href="https://twitter.com/getatomichabits" target="_blank"><i class="lni-twitter-original"></i></a></li>
                                        <li><a href="#" target="_blank"><i class="lni-instagram-original"></i></a></li>
                                    </ul>
                              </div> 
                              
                          </div> 
                      </div>
                  </div> 
                  <div class="row">
                      <!-- <div class="col-lg-4 col-md-6 col-sm-7">
                          <div class="footer-link">
                              <h6 class="footer-title">Company</h6>
                              <ul>
                                  <li><a href="#">About</a></li>
                                  <li><a href="#">Contact</a></li>
                                  <li><a href="#">Career</a></li>
                              </ul>
                          </div> 
                      </div> -->
                      <!-- <div class="col-lg-4 col-md-6 col-sm-7">
                          <div class="footer-link">
                              <h6 class="footer-title">Help & Support</h6>
                              <ul>
                                  <li><a href="#">Support Center</a></li>
                                  <li><a href="#">FAQ</a></li>
                                  <li><a href="#">Terms & Conditions</a></li>
                              </ul>
                          </div> 
                      </div> -->
                      <div class="col-lg-4 col-md-6 col-sm-7">
                          <div class="footer-link">
                              <h6 class="footer-title">Community Credits</h6>
                              <ul>
                                  <li><a rel="nofollow" href="https://blockstack.org/" target="_blank">Blockstack.org</a></li>
                                  <li><a rel="nofollow" href="https://uideck.com/" target="_blank">UIdeck &amp; AyroUI</a></li>
                                  <li><a rel="nofollow" href="https://icons8.com/" target="_blank">Icons &amp; Illustrations by icons8</a></li>
                                  <li>Icon made by <a rel="nofollow" href="https://www.flaticon.com/authors/freepik/" target="_blank">freepik</a> from <a rel="nofollow" href="https://www.flaticon.com" target="_blank">flaticon</a></li>
                              </ul> 
                          </div>
                      </div>
                  </div> 
              </div> 
          </div> <!-- footer widget -->
          
          <div class="footer-copyright">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-12">
                          <div class="copyright text-center">
                              <p class="text">Atomic Habits 2019 :: Powered by <a rel="nofollow" href="https://blockstack.org/" target="_blank">Blockstack</a></p>
                          </div>
                      </div>
                  </div> 
              </div> 
          </div> <!-- footer copyright -->
      </footer>

      <!--====== FOOTER PART ENDS ======-->

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