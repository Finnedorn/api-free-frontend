<template>
    <div id="container ">
        <h1 class="text-center pt-5">Aggiungiamo un nuovo Post!</h1>

        <div>
        <form @submit.prevent="submitForm">
            <div>
            <label for="title">Titolo:</label>
            <input type="text" id="title" v-model="formData.title" required />
            </div>

            <div>
            <label for="image">Immagine:</label>
            <input type="file" id="image" @change="handleFileUpload" required />
            </div>

            <div>
            <label for="content">Descrizione:</label>
            <textarea id="content" v-model="formData.content" required></textarea>
            </div>

            <div>
            <label for="category">Seleziona una Categoria:</label>
            <select id="categorId" v-model="formData.categoryId" required>
                <option
                v-for="(category, index) in store.categories"
                :key="index"
                :value="category.id"
                >
                {{ category.name }}
                </option>
            </select>
            </div>

            <div>
            <label for="tags">Seleziona uno o piu Tag:</label>
            <div v-for="(tag, index) in store.tags" :key="index">
                <input
                type="checkbox"
                :id="tag.id"
                :value="tag.id"
                v-model="formData.tags"
                />
                <label :for="tag.id">{{ tag.name }}</label>
            </div>
            </div>

            <button type="submit">Submit</button>
        </form>
        </div>

        <div class="d-flex justify-content-center pt-5">
        <router-link to="/">
            <h2 class="text-light">Torna alla main Page</h2>
        </router-link>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { store } from "../assets/data/store";
export default {
  name: "AppPostCreate",
  components: {},
  data() {
    return {
      store,
      formData: {
        title: "",
        image: "",
        content: "",
        categoryId: 1,
        tags: [],
        userId: 2,
        published: true
      },
    };
  },
  methods: {
    getCategories() {
      return axios.get(this.store.apiUrl + "categories/");
    },
    getTags() {
      return axios.get(this.store.apiUrl + "tags/");
    },
    loadAll() {
      Promise.all([this.getCategories(), this.getTags()])
        .then((res) => {
          this.store.categories = res[0].data;
          this.store.tags = res[1].data;
        })
        .catch((err) => {
          console.log(err);
          throw new Error(err);
        });
    },
    handleFileUpload(event) {
      this.formData.image = event.target.files[0];
    },
    async submitForm() {
      try {
        console.log(this.formData);
        const formData = new FormData();
        formData.append("title", this.formData.title);
        formData.append("content", this.formData.content);
        formData.append("published", this.formData.published);
        formData.append("categoryId", this.formData.categoryId);
        // Append each tag separately
        this.formData.tags.forEach((tag, index) => {
            console.log(`tag[${index}]`, tag);
          formData.append(`tags[${index}]`, tag);
        });
        formData.append("image", this.formData.image);
        formData.append("userId", this.formData.userId);

        const response = await axios.post(store.apiUrl + "posts/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        console.log(`Post Creato con successo: ${response.data}`);
        this.$router.push('/');
      } catch (error) {
        console.error(`Errore durante la creazione del post: ${error}`);
        console.log(`URL della req: ${error.config.url}`);
      }
    },
  },
  mounted() {
    this.loadAll();
  },
};
</script>

<style lang="scss" scoped>
// @use "./assets/style/partials/variables" as *;

#container {
  height: 100vh;
}
</style>
