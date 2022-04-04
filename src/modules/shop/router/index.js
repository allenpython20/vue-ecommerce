export default {
    name : 'shop',
    component: () => import(/* webpackChunkName: "Shop" */ '@/modules/shop/layouts/ProductsLayout.vue'),
    children:[
        {
            path:'',
            name: 'shop-list',
            component: () => import(/* webpackChunkName: "Product" */ '@/modules/shop/components/ListProducts.vue'),
        },
        {
            path:':id',
            name: 'shop-product',
            component: () => import(/* webpackChunkName: "Product" */ '@/modules/shop/components/ProductView.vue'),
            props: (route) => {
                const id = Number(route.params.id);
                return isNaN(id) ? {id:1} : {id}
            }
        
        },
        {    
            path:'cart',
            name: 'cart-products',
            component: () => import(/* webpackChunkName: "Product" */ '@/modules/shop/components/CartProducts.vue'),
        } ,
        {    
            path:'myOrders',
            name: 'my-orders',
            component: () => import(/* webpackChunkName: "Orders" */ '@/modules/shop/components/OrdersProducts.vue'),
        } 
    ]
  
}