<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <peopleList :peopleList=suspects></peopleList>
      <person/>
    </v-main>
  </v-app>
</template>

<script>
import peopleList from './components/peopleList';
import person from './components/person';

export default {
  name: 'App',

  components: {
    peopleList,
    person
  },

  data: () => ({
    suspects: [
      {
        personId: '123456789',
        first_name: 'ספיר',
        last_name: 'רוזן',
        person_img_url: 'https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png'
      },
      {
        personId: '777777777',
        first_name: 'שירה',
        last_name: 'מוצפי',
        person_img_url: 'https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png'
      },
      {
        personId: '111111111',
        first_name: 'אוריה',
        last_name: 'וייס',
        person_img_url: 'https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png'
      }
    ]
  }),
};
</script>
