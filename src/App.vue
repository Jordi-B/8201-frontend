<template>    
  <v-app>
    <v-app-bar app clipped-leftS flat dark>
      <v-toolbar-title>
        <span>8201</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <Sidebar/>
    <!-- <router-view></router-view> -->
    <v-main class="page">
      <router-view></router-view>
      <!-- <v-container>
      <v-row>
                <v-col sm="3">
        </v-col>
      <v-col
      sm="3">
      <peopleList :listTitle="wanted" color="red" :peopleList=wanteds class="wanted-list"></peopleList>
      </v-col>
      <v-col
      sm="3">
      <peopleList :listTitle="suspect" color="yellow" :peopleList=suspects class="suspect-list"></peopleList>
      </v-col>
              <v-col
              sm="3">
        <wordsList title="מילים" description="מילים לניטור חשוד" :words="['רצח', 'שוד', 'גניבה', 'דקירה', 'סכין', 'מוות']"></wordsList>
        </v-col>
      </v-row>
      </v-container> -->
    </v-main>
  </v-app>
</template>

<script>
// import peopleList from './components/peopleList';
// import wordsList from './components/WordsList';
import Sidebar from './components/Sidebar.vue';

export default {
  name: 'App',

  components: {
    // peopleList,
    // wordsList,
    Sidebar
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
    ],
    wanteds: [
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
    ],
    suspect: "חשודים",
    wanted: "מבוקשים"
  }),
};
</script>

<style>
.page {
  background-color: #22223b;
}
.container {  
  display: flex;
  justify-content: space-around;
  align-items: center;
}

html {
  height: 100%;
  width: 100%;
  margin: 0;
  background-color: black;
}

.page {
  background-color: #060e29;
}
</style>
