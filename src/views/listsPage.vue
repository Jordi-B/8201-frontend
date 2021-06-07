<template>
    <v-container>
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
    </v-container>
</template>

<script>
import peopleList from '../components/peopleList';
import wordsList from '../components/WordsList';

export default {
    name: 'ListsPage',
    components: {
        peopleList,
        wordsList
    },
    data() {
        return {
            
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
        }
    }
}
</script>