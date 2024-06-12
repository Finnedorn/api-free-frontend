<template>
  <div>
    <HeaderComponent/>
    <router-view :key="$route.path"></router-view>
  </div>
</template>

<script>
import axios from "axios";
import { store } from "./assets/data/store";
import HeaderComponent from "./components/HeaderComponent.vue";
import PostComponent from "./components/PostComponent.vue";
export default {
  name: 'App',
  components: {
    HeaderComponent,
    PostComponent
  },
  data() {
    return {
    };
  },
  methods: {
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
//   @use "./assets/style/partials/variables" as *;

div {
  background-image: url("./assets/img/blog-bg.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}

</style>
