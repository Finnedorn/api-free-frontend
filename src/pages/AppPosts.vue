<template>
  <h1>
    Hello
  </h1>
  <!-- x domani: fixa le card che crashano -->
  <div class="container-fluid d-flex flex-wrap justify-content-center align-items-center position-relative">
    <PostComponent v-for="post in store.posts" 
    :key="post.id" 
    :title="post.title" 
    :source="post.image"
    :content="post.content"
    :link="post.id" 
    />
    <!-- x domani: crea la route dello show del post -->
    <!-- :link="{name: 'post-show', params: {slug: post.slug}}" -->
    <!-- aggiungi un tasto + che porta alla create del post -->
  </div>
</template>

<script>
import axios from "axios";
import { store } from "../assets/data/store";
import PostComponent from "@/components/PostComponent.vue";
export default {
  name: 'AppPosts',
  components: {
    PostComponent
  },
  data() {
      return {
        store,
      };
  },
  methods: {
    getAllPosts() {
      axios.get(this.store.apiUrl + "posts/")
        .then((res) => {
          this.store.posts = res.data;
          console.log(this.store.posts);
        })
    }
  },
  mounted() {
    this.getAllPosts()
  }
}
</script>

<style lang="scss" scoped>
//   @use "./assets/style/partials/variables" as *;
</style>
