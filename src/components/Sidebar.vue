<template>
    <v-navigation-drawer app right flat dark mini-variant permanent expand-on-hover>
        <v-list>
        <v-list-item-avatar class="top-img">
          <v-img src="https://d3926qxcw0e1bh.cloudfront.net/pages_avatar_photos/8f/bf/8fbf53a8618d88f35b9c4225db2c7340.png"></v-img>
        </v-list-item-avatar>
        <v-list-item
          v-for="item in navbarlist"
          :key="item.text"
          link
          :to="item.route"
          class="list-item"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="navbar-title">{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        

        <v-list-item
          link
          to=""
          class="list-item logout"
          @click="logOut"
        >
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="navbar-title">התנתקות</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
import { mapActions } from 'vuex'

  export default {
    name: 'Sidebar',
    data() {
      return {
        navbarlist: [
           { icon: "mdi-view-dashboard", text: "ראשי", route: "/" }, 
           { icon: "mdi-text-account", text: "רשימות", route: "/lists" },
           { icon: "mdi-account-key", text: "הרשאות", route: "/permissions" }
        ]
      }
    },
    methods: {
      ...mapActions(['setIsLoggedIn']),
      logOut() {
        this.setIsLoggedIn(false);
      }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Heebo&display=swap');

* {
    font-family: 'Heebo', sans-serif !important;
}
.navbar-title {
  direction: rtl;
  font-family: 'Heebo', sans-serif !important;
}

.logout {
  background-color: rgb(255, 86, 86) !important;
}

.top-img {
  height: 10vh;
  width: 15vw;
  margin-left: 10px;
}

</style>