<template>
    <Navbar />
    <TableProducts />
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
   
   components:{
       Navbar : defineAsyncComponent(() => import('../components/Navbar.vue')),
       TableProducts : defineAsyncComponent(() => import('../components/TableProducts.vue'))
   }
}
</script>
