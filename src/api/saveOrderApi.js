import axios from 'axios'

const saveOrderApi = axios.create({
    baseURL:'http://localhost:8080',
})

export default saveOrderApi