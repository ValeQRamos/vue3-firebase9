<script setup>
import { ref } from "vue";
import { useUserStore } from "../stores/user";
// import { useRouter } from "vue-router";

const userStore = useUserStore();
// const router = useRouter();

const email = ref("");
const password = ref("");

const handleSubmit = async () => {
  if (!email.value || !password.value) {
    return alert("llena los campos");
  }
  await userStore.registerUser(email.value, password.value);
  // router.push("/");
};
</script>

<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="handleSubmit">
      <input type="emial" placeholder="ingrese email" v-model.trim="email" />
      <input
        type="password"
        placeholder="ingrese contraseña"
        v-model="password"
      />
      <button type="submit" :disabled="userStore.loadingUser">
        Crear Usuario
      </button>
    </form>
  </div>
</template>
