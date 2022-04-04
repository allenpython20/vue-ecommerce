<template>
    <nav class="navbar bg-primary">
        <a class="navbar-brand text-white" href="">
            <img src="@/assets/logo.png" 
                alt="logo Fisi"
                height="24"
                class="d-inline-block align-text-top  mx-2"
            >
            Products
        </a>

        <div class="d-flex">
            <button class="btn btn-outline-info mx-2"
                @click="onLogout"
            >
                <i class="fa fa-sign-out-alt"></i>
            </button>
        </div>

    </nav>
</template>

<script>
import useAuth from '@/modules/auth/composables/useAuth'
import { useRouter } from 'vue-router'
export default {
    setup(){
        const router = useRouter()
        const {logout} = useAuth()

        return {
            onLogout: () => {
                router.push({name:'login'})
                logout()
            }
        }
    }
}
</script>