import productsApi from "@/api/productsApi"

export const loadProducts = async ({commit}) => {
   
    const {data} = await productsApi.get('/getAll')
    if(!data) {
        commit('setProducts',[])
        return 
    }

    const products = [...data]
    // for(let id of Object.keys(data)){
    //     products.push({
    //         ...data[id]
    //     })

     
    // }

    commit('setProducts',products)
   
}

export const updateProduct = async ({commit},product) => {
    product.picture = 'https://i.ibb.co/029k689/TARJ-VIDEO-ASUS-ROG-STRIX-RTX-3090-24-GB-GDDR6-X-OC-WHITE.jpg'
    const {data} = await productsApi.post('/save',product)
    commit('updateProduct',{...data})
}

export const createProduct = async ({commit},newProduct) => {
    // const newProduct = {
    //     "name":"Product1",
    //     "description":"mydescrip",
    //     "picture":"https://i.ibb.co/5vHjw9H/Cooler-CPU-Gigabyte-Aorus-Liquid-Cooler-280-RGB-Refrigeracion-Liquida.jpg",
    //     "price":1500,
    //     "amount":32
    // }
    // delete newProduct.user
    const {data} = await productsApi.post('/save',newProduct)
    commit('addProduct',data)
}

export const deleteProduct = async ({commit},id) => {
    await productsApi.delete(`/delete/${id}`)
    commit('deleteProduct',id)
    return id
}