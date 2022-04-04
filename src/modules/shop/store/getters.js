// export const myGetter  =  (state) => {
//    return state
// }

export const getProductsCart  =  (state) => () => {
    return state.cartProducts
}