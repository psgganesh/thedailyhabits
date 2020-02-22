<template>
  <div class="d-block">
    <nuxt />
  </div>
</template>

<script>
export default {
  name: "simple",
  head: {
    titleTemplate: "thedailyhabits - %s",
    title: "A habits journal centred around privacy",
    link: [
      { rel: "stylesheet", href: "frontend/css/base.css" },
      { rel: "stylesheet", href: "frontend/css/vendor.css" },
      { rel: "stylesheet", href: "frontend/css/main.css" }
    ]
  }
};
</script>