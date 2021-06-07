<template>
    <v-navigation-drawer app right flat dark mini-variant permanent expand-on-hover>
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Computer_Service_Directorate.svg/1200px-Computer_Service_Directorate.svg.png"></v-img>
          </v-list-item-avatar>

        <v-list-item-title>8201</v-list-item-title>
        </v-list-item>
        <!-- <v-list-item v-for="item in navbarlist" :key="item.route" :to="item.route"> -->
          <v-list-item v-for="item in navbarlist" :key="item.route">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content> </v-list-item-content>
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
          [ { icon: "mdi-view-dashboard", text: "Dashboard", route: "/" }, 
            { icon: "mdi-upload", text: "Upload", route: "/upload" } ]
        ]
      }
    }
}
</script>

<style scoped>

</style>