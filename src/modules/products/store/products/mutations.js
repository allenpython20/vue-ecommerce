// export const myMutation =  (state) => {
    
// }

export const setProducts =  (state,products) => {
    state.products = []
    state.products = [...state.products,...products]
    state.products = state.products.reverse()
    state.isLoading = false
}

export const updateProduct =  (state,product) => {
    const idx = state.products.map( e => e.id ).indexOf(product.id)
    state.products[idx] = product
}

export const addProduct =  (state,product) => {
    state.products = [product,...state.products]
}

export const deleteProduct=  (state,id) => {
    state.products = state.products.filter(product => product.id !== id)
}

export const clearProducts =  (state) => {
    state.products = []
}