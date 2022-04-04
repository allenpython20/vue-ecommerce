// export const myAction = async ({commit}) => {

import authApi from "@/api/authApi"

    
// }

export const createUser = async (/*{commit}*/_,user) => {
    try{
        await authApi.post('/nuevo',user)
        return {ok:true}
        
    }catch(error){

        return {ok:false,message:error}
    }
}

export const signInUser = async ({commit},user) => {
    try{
        const {data} = await authApi.post('/login',user)
        const idToken = data.token
        delete user.password
        commit('loginUser',{user,idToken})

        return {ok:true}
    }catch(error){
        return {ok:false,message:error}
    }
}

export const checkAuthentication = async({commit}) => {
    const token = localStorage.getItem('idToken')
    const user = localStorage.getItem('user')

    console.log("ac a")
    console.log(user)

    if(!token){
        commit('logout')
        return { ok:false, message:'No hay token'}
    }

    try{
        const {data} = await authApi.post('/refresh',{token})
        const idToken = data.token

        commit('loginUser',{user,idToken})
        
        return {ok:true}

    }catch(error){
        commit('logout')
        return {ok:false,message:error}
    }
}