
import { createStore } from "vuex";

import auth from '../modules/auth/store'
import products from '../modules/products/store/products'
import shop from '../modules/shop/store'

const store = createStore({
    modules:{
        products,
        auth,
        shop
    }
    
})

export default store
