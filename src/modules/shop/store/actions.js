import saveOrderApi from "@/api/saveOrderApi"
// export const myAction = async ({commit}) => {
    
// }

export const createOrderProducts = async (/*{commit}*/_,products) => {
    try{
        const token = localStorage.getItem('idToken')
        console.log(products)
        const products2 = [
            {
                "productName": "Produc 1",
                "amount": 5		
            },
            {
                "productName": "Produc 2",
                "amount": 2
            }
        ]
        const {data} = await saveOrderApi.get('/saveorder',products2,{
            headers:{
                Authorization:'Bearer '+token
            }
        })
        console.log(data)
        return {ok:true}
    }catch(error){
        console.log(error)
        return {ok:true}
    }
}

export const loadOrderProducts = async (/*{commit}*/) => {
    try{
        const token = localStorage.getItem('idToken')
        const {data} = await saveOrderApi.get('/myorders',{
            headers:{
                Authorization:'Bearer '+token
            }
        })
        return {ok:true,data}
    }catch(error){
        console.log(error)
        return {ok:false}
    }
}