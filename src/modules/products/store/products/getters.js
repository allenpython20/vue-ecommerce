// export const myGetter  =  (state) => {
//    return state
// }

export const getProductsByTerm  =  (state) => (term='') => {
    if(term.length === 0 ) return state.products
    return state.products.filter( product => product.name.toLowerCase().includes(term.toLocaleLowerCase() ))
}

export const getProductsById =  (/*state*/) => {
    
}