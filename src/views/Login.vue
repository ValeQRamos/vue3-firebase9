<script setup>
import { ref } from "vue";
import { useUserStore } from "../stores/user";

const userStore = useUserStore();

const email = ref("");
const password = ref("");

const handleSubmit = async () => {
  if (!email.value || !password.value) {
    return alert("llena los campos");
  }
  await userStore.loginUser(email.value, password.value);
};
</script>

<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="handleSubmit">
      <input type="emial" placeholder="ingrese email" v-model.trim="email" />
      <input
        type="password"
        placeholder="ingrese contraseña"
        v-model="password"
      />
      <button type="submit" :disabled="userStore.loadingUser">Acceso</button>
    </form>
  </div>
</template>
