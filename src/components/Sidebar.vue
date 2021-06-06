<template>
    <v-navigation-drawer app right flat dark mini-variant permanent expand-on-hover>
      <v-list>
        <v-list-item class="px-2">

        </v-list-item>
        <v-list-item v-for="item in navbarlist" :key="item.route" :to="item.route">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>{{ item.text }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'Sidebar'
}
</script>

<style scoped>

</style>