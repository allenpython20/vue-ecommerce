import axios from 'axios'

const productsApi = axios.create({
    baseURL:'http://localhost:8080/producto'
})

export default productsApi