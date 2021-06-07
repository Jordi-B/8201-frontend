<template>    
  <v-app>
    <v-app-bar app clipped-leftS flat dark>
      <v-toolbar-title>
        <span>8201</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <Sidebar/>
    <v-main class="page">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from './components/Sidebar.vue';

export default {
  name: 'App',

  components: {
    Sidebar
  },

};
</script>

<style>
.page {
  background-color: #22223b;
}
.container {  
  display: flex;
  justify-content: space-around;
  align-items: center;
}

html {
  height: 100%;
  width: 100%;
  margin: 0;
  background-color: black;
}

.page {
  background-color: #060e29;
}
</style>
