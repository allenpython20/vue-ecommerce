<template>
    <input v-show="term"
        type="text"
        class="form-control"
        placeholder="Buscar producto"
        v-model="term"
                    
    >
    <div class="container mt-50">
        <div class="row">
            <ProductItem v-for="product in productsByTerm" 
                :key="product.id"
                :product="product"
            /> 
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters } from 'vuex'

export default {
    components:{
        ProductItem : defineAsyncComponent(() => import('../components/ProductItem.vue')),
    },
    data(){
        return {
            term:'',
        }
    },
    computed:{
        ...mapGetters('products',['getProductsByTerm']),
        productsByTerm() {
            return this.getProductsByTerm(this.term)
        }
    }
    
    
}
</script>


<style scoped>
.mt-50 {
    margin-top: 50px
}
</style>