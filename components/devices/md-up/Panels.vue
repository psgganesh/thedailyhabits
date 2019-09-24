<template>
  <div class="wrapper">
    <v-col class="column" cols="3">
      <div>1</div>
    </v-col>
    <v-col class="column" cols="3">
      <div>2</div>
    </v-col>
    <v-col class="column" cols="3">
      <div>3</div>
    </v-col>
    <v-col class="column" cols="3">
      <div>4</div>
    </v-col>
  </div>
</template>

<script>
export default {
  name: "Panels"
};
</script>

<style >
.wrapper {
  display: flex;
  height: 80vh;
}
.column {
  display: flex;
  flex-direction: column;
}
.column > div {
  font-size: 4vh;
  color: white;
  background: mediumorchid;
  margin: 0.1em;
  padding: 0.3em 1em;
  border-radius: 3px;
  flex: 1;
}
</style>