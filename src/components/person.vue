<template>
  <v-card
    class="mx-auto personCard"
    max-width="18vw"
    outlined
    elevation="3"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5 mb-1 infoText">
          {{somePerson.person.firstName + ' ' + somePerson.person.lastName}}
        </v-list-item-title>
        <v-list-item-subtitle class="infoText">{{somePerson.person.id}}</v-list-item-subtitle>
      </v-list-item-content>
      <v-avatar height="7vh" width="7vh">
      <v-img class="urlImage"
        :src="somePerson.person.personImageURL"
        ></v-img>        
      </v-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
        :to="`/profile/${somePerson.person.id}`"
    class="infoText profileButotn">
        מעבר לפרופיל
         <v-icon
          dark
          left
        >
          mdi-arrow-left
        </v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    props: {
        somePerson: Object
    }
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Heebo&display=swap');

* {
    font-family: 'Heebo', sans-serif !important;
}
.personCard {
    background-color: #2e303f !important;
    margin-bottom: 1vh;
}
.infoText {
    color: #ffffff !important;
    direction: rtl;
    margin-right: 1vw;
    font-family: 'Heebo', sans-serif !important;
}

.text-h5 {
  font-family: 'Heebo', sans-serif !important;
}
.profileButotn {
    background-color: #6c757d;
}
.urlImage {

}
</style>