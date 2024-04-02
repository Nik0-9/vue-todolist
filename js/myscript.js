import { carbonara } from "./data.js";

const {createApp} = Vue;

createApp({
    data(){
        return{
            carbonara,
        }
    },
    methods:{

    },
    mounted(){
        console.log(this.carbonara);
    }
}).mount('#app')