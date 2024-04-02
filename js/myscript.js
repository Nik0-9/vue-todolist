import { carbonara } from "./data.js";

const {createApp} = Vue;

createApp({
    data(){
        return{
            carbonara,
        }
    },
    methods:{
        toggleLineThrough(id){
            const item = this.carbonara.find((el)=>el.id === id);
            console.log(item);
            if(item){
                item.done = !item.done
            }
        }
    },
    mounted(){
        console.log(this.carbonara);
    }
}).mount('#app')