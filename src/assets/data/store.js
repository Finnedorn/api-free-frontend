import {reactive} from "vue";

export const store = reactive({
    apiUrl:'http://localhost:3001/',
    // imgBasePath: '',
    posts:[],
    categories:[],
    tags:[]
});