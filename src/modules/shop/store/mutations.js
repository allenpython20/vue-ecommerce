// export const myMutation =  (state) => {
    
// }


export const addProductCart =  (state,product) => {
    state.cartProducts = [product,...state.cartProducts]
}