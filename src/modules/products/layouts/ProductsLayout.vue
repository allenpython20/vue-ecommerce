<template>
    <Navbar />
    <div v-if="isLoading" 
        class="row justify-content-md-center">
        <div class="col-3 alert-info text-center mt-5">
            Espere por favor...
            <h3>
                <i class="fa fa-spin fa-sync"></i>
            </h3>
        </div>
    </div>
    <div v-else>
        <TableProducts />
    </div>
    

</template>

<script>
import { defineAsyncComponent } from 'vue'
import {mapActions,mapState} from 'vuex'

export default {
   
    components:{
       Navbar : defineAsyncComponent(() => import('../components/Navbar.vue')),
       TableProducts : defineAsyncComponent(() => import('../components/TableProducts.vue'))
    },
    methods:{
       ...mapActions('products',['loadProducts'])
    },
    computed:{
       ...mapState('products',['isLoading'])
    },
    created(){
       this.loadProducts()
    }
}
</script>
