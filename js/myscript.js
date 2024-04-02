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
        },
        removeById(id){
            const index = this.carbonara.findIndex((el)=>el.id === id);
            if(index !== -1){
                this.carbonara.splice(index, 1);
            }
        }
    },
    mounted(){
        console.log(this.carbonara);
    }
}).mount('#app')