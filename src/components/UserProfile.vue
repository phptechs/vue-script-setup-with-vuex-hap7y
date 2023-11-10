<template>
    <button @click="logout" v-if="loginStatus">Logout</button>
    <button @click="login" v-else>Login</button>
    <pre>loginStatus: {{ loginStatus }}</pre>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const login = () => store.dispatch('login', { user: { email: 'gene@gmail.com' } })
const logout = () => store.dispatch('logout')
const loginStatus = computed(() => store.getters.loginStatus)
</script>
