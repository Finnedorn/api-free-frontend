<template>
  <h1 class=" text-center pt-5">
    Post dai miei Viaggi
  </h1>
  <!-- x domani: fixa le card che crashano -->
  <div class="container d-flex flex-wrap justify-content-center align-items-center position-relative">
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
  <div class="d-flex justify-content-center pt-1 pb-5">
    <router-link to="/create">
      <div class="plus-wrapper">
        <i class="fa-solid fa-plus"></i>
      </div>
    </router-link>
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

.container {
  gap: 100px 50px;
  padding: 100px 50px;
}

.plus-wrapper {
  color: white;
  width: 60px;
  height: 60px;
  background-color: #ffa2ef;
  border-radius: 10%;
  box-shadow: 0 15px 45px rgba(0, 22, 13, 0.476);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    width: 70px;
    height: 70px;
    box-shadow: 0 35px 80px rgba(0, 22, 13, 0.513);
  }
}

</style>
