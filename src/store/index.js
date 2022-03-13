
import { createStore } from "vuex";
import products from '../modules/products/store/products'

const store = createStore({
    modules:{
        products
    }
    
})

export default store
