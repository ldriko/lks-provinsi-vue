<template>
  <v-app>
    <v-app-bar app dark flat>
      <h3>GAMES</h3>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
}
</script>
