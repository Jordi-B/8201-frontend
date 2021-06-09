<template>    
  <v-app>
    <v-app-bar app clipped-leftS flat dark>
      <v-toolbar-title>
        <span class="head-title">8201</span><span> ניטור פעילות חשודה ברשתות חברתיות</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <h2 class="greeting" v-if="$store.state.isLoggedIn"> <span v-if="$store.state.isManager" class="permissions"> (הרשאות מנהל) </span>{{ `${this.$store.state.username} ,שלום` }}</h2>
      
    </v-app-bar>
    <Sidebar v-if="this.$store.state.isLoggedIn"/>
    <v-main class="page" v-if="this.$store.state.isLoggedIn">
      <router-view></router-view>
    </v-main>
    <v-main class="page" v-else>
      <login></login>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import login from './components/login';
import { axios } from './api/api';
import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    Sidebar,
    login
  },
  methods: {
    ...mapActions(['setIsLoggedIn', 'setIsManager', 'setUsername'])
  },
  created() {
    const token = window.localStorage.getItem('token');
    if(token) {
         this.setIsLoggedIn(true);
         this.setIsManager(JSON.parse(window.localStorage.getItem('isManager')));
         this.setUsername(window.localStorage.getItem('username'));
         axios.defaults.headers.common['token'] = token;
    } else {
         this.setIsLoggedIn(false);
         this.setIsManager(false);
         this.setUsername('');
    }
  }

};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Heebo&display=swap');

* {
    font-family: 'Heebo', sans-serif !important;
}

.form {
  text-align: center !important;
}

.input-form {
  text-align: center !important;
}
.page {
  background-color: #22223b;
}
.container {  
  justify-content: space-around;
  align-items: center;
}

.permissions {
  color: red;
  font-size: 1vw;
  font-weight: lighter;
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

.primary-title {
  color: #fff;
  margin-left: 14vw;
  font-size: 2vw;
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
