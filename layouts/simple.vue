<template>
  <div id="preloader">
    <nuxt />
  </div>
</template>

<script>
export default {
  name: "simple",
  head: {
    titleTemplate: "atomichabits - %s",
    title:
      "Habit tracker which uses aggregation of marginal gains at the system level",
    link: [{ rel: "stylesheet", href: "/frontend.css" }]
  }
};
</script>

<style>
.d-none {
  display: none;
}
.d-block {
  display: block;
}
#main {
  font-family: Merriweather Sans, sans-serif !important;
}
.header-hero .header-content .text {
  color: #0067f4 !important;
}
.header-hero::before {
  background: -webkit-linear-gradient(
    #e8edffe6,
    #effeffe6 20%,
    #ffffff1f,
    #ffffff1f
  );
  background: -o-linear-gradient(
    #e8edffe6,
    #effeffe6 20%,
    #ffffff1f,
    #ffffff1f
  );
  background: linear-gradient(
    #e8edffe6,
    #effeffe6 20%,
    #ffffff1f,
    #ffffff1f
  ) !important;
}
.header-hero .header-content .header-btn li a.main-btn.btn-one::before {
  background: url("/images/blockstack.png") left no-repeat !important;
  background-size: contain !important;
}
.header-hero .header-content .header-btn li a.main-btn {
  width: -webkit-fill-available !important;
  padding-left: 55px !important;
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
.section-title .title {
  font-size: 50px !important;
  font-family: Merriweather Sans, sans-serif !important;
}
</style>