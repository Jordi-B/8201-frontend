<template>
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
</template>
<script>
import { mapActions } from 'vuex'
// import api from '../api/api';
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['setIsLoggedIn']),
    logIn() {
    //   api.profile().logIn(this.username, this.password);
      this.setIsLoggedIn(true);
    }
  }
}
</script>