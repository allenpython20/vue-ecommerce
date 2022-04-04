<template>
    <Navbar />
    <router-view v-if="loading"></router-view>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapActions } from 'vuex'
export default {
   
    components:{
       Navbar : defineAsyncComponent(() => import('../components/Navbar.vue')),
       
    },
    data(){
        return {
            loading:false
        }
    },
    methods:{
        ...mapActions('products',['loadProducts']),
        async onLoadProducts (){
            await this.loadProducts()
            this.loading = true
        }
    },
    created(){
        console.log("monta")
        this.onLoadProducts()
    }
}
</script>

