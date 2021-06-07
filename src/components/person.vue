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
          {{somePerson.firstName + ' ' + somePerson.lastName}}
        </v-list-item-title>
        <v-list-item-subtitle class="infoText">{{somePerson.id}}</v-list-item-subtitle>
      </v-list-item-content>
      <v-img class="urlImage"
  v-bind:lazy-src="somePerson.person_img_url"
  max-height="7vh"
  max-width="5vw"
  v-bind:src="somePerson.person_img_url"
></v-img>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
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
.personCard {
    background-color: #2e303f !important;
    margin-bottom: 1vh;
}
.infoText {
    color: #ffffff !important;
    direction: rtl;
}
.profileButotn {
    background-color: #6c757d;
}
.urlImage {
    margin-left: 1vw;
    border-radius: 50%;
}
</style>