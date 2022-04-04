// export const myGetter  =  (state) => {
//    return state
// }

export const getProductsByTerm  =  (state) => (term='') => {
    if(term.length === 0 ) return state.products
    return state.products.filter( product => product.name.toLowerCase().includes(term.toLocaleLowerCase() ))
}

export const getProductById =  (state) => (id= '') => {
    console.log(state.products)
    const product = state.products.find(product => product.id == id)

    if(!product) return 

    return {...product}



}