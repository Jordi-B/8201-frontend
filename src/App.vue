<template>    
  <v-app>
    <v-app-bar app clipped-leftS flat dark>
      <v-toolbar-title>
        <span class="head-title">8201</span><span> ניטור פעילות חשודה ברשתות חברתיות</span>
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
@import url('https://fonts.googleapis.com/css2?family=Heebo&display=swap');

* {
    font-family: 'Heebo', sans-serif !important;
}
.page {
  background-color: #22223b;
}

html {
  height: 100%;
  width: 100%;
  margin: 0;
  background-color: black;
  font-family: "heebo";
}

.page {
  background-color: #060e29;
}

.head-title {
  font-weight: bolder;
    text-shadow: 2px 2px rgb(163, 163, 163);

}

.head-title2 {
  margin-left: 35vw;

}

.one {
  font-weight: bolder;
  color: red;
}

::-webkit-scrollbar {
    width: 2.5px;
}

::-webkit-scrollbar-thumb {
    background: rgb(163, 163, 163);
}
</style>
