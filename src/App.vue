<script setup>
import { RouterView, RouterLink } from "vue-router";
import { useUserStore } from "./stores/user";
const userStore = useUserStore();
</script>

<template>
  <div>
    <h1>App</h1>
    <nav v-if="!userStore.loadingSession">
      <template v-if="userStore.userData">
        <RouterLink to="/"> Home</RouterLink> |
        <button @click="userStore.logoutUser">Logout</button>
      </template>
      <template v-else>
        <RouterLink to="/login"> Login</RouterLink> |
        <RouterLink to="/register"> Register</RouterLink>
      </template>
    </nav>
    <div v-else>Loading User...</div>
    <RouterView />
  </div>
</template>
