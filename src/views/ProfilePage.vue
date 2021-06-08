<template>
<v-container>
    <v-row>
        <person-details :person="person" @change-wanted-state="changeWantedState" bgColor="#2A2B38" :wantedButtonStatus="wantedButton"></person-details>
    </v-row>
</v-container>
</template>

<script>
import PersonDetails from '../components/PersonDetails.vue';

export default {
    name: 'ProfilePage',
    components: {
        PersonDetails
    },
    methods : {
      changeWantedState : function () {
        this.person.is_wanted = !this.person.is_wanted
      }
    },
    data: () => ({
      person:{
        id: '123456798',
        first_name: 'mor',
        last_name: 'steinberg',
        phone_number: '0585676543',
        address: 'דן 8 מיתר',
        person_img_url: '',
        is_wanted: false
      },
      wantedButton: true,   
    })
}
</script>

<style scoped>

</style>