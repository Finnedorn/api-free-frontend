<template>
  <h1>
      Hello
  </h1>
</template>

<script>
import axios from "axios";
import { store } from "../assets/data/store";
export default {
  name: 'AppPosts',
  components: {
  },
  data() {
      return {
        store,
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
</style>
