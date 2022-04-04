import { useStore } from "vuex"
import { computed } from "vue"

const useAuth = () => {
    const store = useStore()

    const createUser = async(user) => {
        
        const resp = await store.dispatch('auth/createUser',user)

        return resp
    }

    const loginUser = async(user) => {
        
        const resp = await store.dispatch('auth/signInUser',user)

        return resp
    }

    const checkAuthStatus = async() => {
        const resp = await store.dispatch('auth/checkAuthentication')
        return resp
    }

    const logout = () => {
        store.commit('auth/logout')
        store.commit('products/clearProducts')
        //limpiar
    }

    return{
        createUser,
        checkAuthStatus,
        loginUser,
        logout,

        authStatus: computed(()=>store.getters['auth/currentState']),
    }
}

export default useAuth