
export default {
    name : 'products',
    component: () => import(/* webpackChunkName: "about" */ '@/modules/products/layouts/ProductsLayout.vue')
  

}