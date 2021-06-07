<template>
    <v-navigation-drawer app right flat dark mini-variant permanent expand-on-hover>
      <v-list>
          <v-list-item-avatar>
            <v-img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Computer_Service_Directorate.svg/1200px-Computer_Service_Directorate.svg.png"></v-img>
          </v-list-item-avatar>

        <v-list-item-title>8201</v-list-item-title>
                            <ul>
                        <router-link tag="li" to="/lists" exact active-class="is-active">
                            <li>
                                <a>רשימות</a>
                            </li>
                        </router-link>
                    </ul>
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