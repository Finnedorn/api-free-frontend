<template>
    <div>
        <!-- <h1>{{ }}</h1>
        <div class="w-25">
            <img :src="store.imgBasePath+project.preview"  :alt="project.project_title">
        </div>
        <h4>{{  }}</h4>
        <p>
            {{ project.description }}
        </p> -->
    </div>
    <router-link :to="{name: 'posts'}">
        Torna alla main Page
    </router-link>
    
</template>

<script>
import axios from "axios";
import { store } from "../assets/data/store";
export default {
    name: 'AppPostsShow',
    components: {
    },
    data() {
        return {
            store,
            post: null,
        };
    },
    methods: {
        // getProjectInfo() {
        //     console.log('ciao');
        //     // lo slug che uso viene passato dal routerlink tramite la variabile nativa $route
        //     axios.get(this.store.apiUrl + "/projects/" + this.$route.params.slug).then((res)=>{
        //         // console.log(res.data);
        //         if(res.data.results) {
        //             this.project=res.data.results
        //         }else {
        //             this.$router.push({name: 'not-found'})
        //         }
        //     })
        // },
        
    },
    mounted() {
        // this.getProjectInfo();
        
    }
}
</script>
  
<style lang="scss" scoped>
</style>