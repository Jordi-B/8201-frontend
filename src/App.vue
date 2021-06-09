<template>    
  <v-app>
    <v-app-bar app clipped-leftS flat dark>
      <v-toolbar-title>
        <span class="head-title">8201</span><span> ניטור פעילות חשודה ברשתות חברתיות</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <Sidebar v-if="this.$store.state.isLoggedIn"/>
    <v-main class="page" v-if="this.$store.state.isLoggedIn">
      <router-view></router-view>
    </v-main>
    <v-main class="page" v-else>
         <v-container fluid fill-height class="login">
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="primary">
                        <v-toolbar-title class="primary-title">התחברות</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                        <v-form class="form">
                           <v-text-field
                              v-model="username"
                              reverse
                              name="login"
                              label="שם משתמש"
                              type="text"
                              class="input-form"
                           ></v-text-field>
                           <v-text-field
                              v-model="password"
                              reverse
                              id="password"
                              name="password"
                              label="סיסמא"
                              type="password"
                              class="input-form"
                           ></v-text-field>
                        </v-form>
                     </v-card-text>
                     <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" to="/" @click="logIn">התחבר</v-btn>
                     </v-card-actions>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import { mapActions } from 'vuex'
// import api from './api/api';

export default {
  name: 'App',
  components: {
    Sidebar
  },
  data() {
    return {
      username: '',
      password: ''
    }
  },

  methods: {
    ...mapActions(['setIsLoggedIn']),
    logIn() {
      // api.lists().logIn(this.username, this.password);
      this.setIsLoggedIn(true);
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
