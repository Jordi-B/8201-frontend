<template>
    <v-container>
      <v-row>
        <v-col sm="2">
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
        <v-col sm="1">
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import peopleList from '../components/peopleList';
import wordsList from '../components/WordsList';
import api from '../api/api';

export default {
    name: 'ListsPage',
    components: {
        peopleList,
        wordsList
    },
    data() {
    return {
    suspects: [],
    wanteds: [],
    suspect: "חשודים",
    wanted: "מבוקשים"
        }
    },
    async mounted() {
    const response = await api.lists().suspectsList();
    const allSuspects = response.data;
    allSuspects.forEach(sus => {
      sus.wanted ? this.wanteds.push(sus) : this.suspects.push(sus); 
    });
  }
}
</script>
<style>
</style>