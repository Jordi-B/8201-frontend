<template>
    <v-navigation-drawer app right flat dark mini-variant permanent expand-on-hover>
        <v-list>
        <v-list-item-avatar>
          <v-img src="https://mpng.subpng.com/20180403/faw/kisspng-office-of-the-inspector-general-for-the-nypd-new-y-police-5ac425c10d6488.0196057115228041610549.jpg"></v-img>
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
      </v-list>
    </v-navigation-drawer>
</template>

<script>
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
</style>