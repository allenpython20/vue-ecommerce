<template>
  <router-view/>
</template>

<script>
import useAuth from './modules/auth/composables/useAuth'
export default {
  setup(){
    const {authStatus} = useAuth()
    return {
      authStatus
    }
  }
}
</script>