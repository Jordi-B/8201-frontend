<template>
<v-container>
    <v-row>
        <person-details :person="person" @change-wanted-state="changeWantedState" bgColor="#2A2B38" :wantedButtonStatus="wantedButton"></person-details>
    </v-row>
    <v-row class="mt-3">
        <v-col cols="2">
        </v-col>
        <v-col
        cols="2">
            <titled-info bgColor="black" amountColor="red" amount="90" title=" שלום מה נשמע איתכם"></titled-info>
        </v-col>
        <v-col cols="2">
            <driver-license></driver-license>
        </v-col>
        <v-col cols="4">
            <reports></reports>
        </v-col>
        <v-col cols="2">
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import PersonDetails from '../components/PersonDetails.vue';
import TitledInfo from '../components/TitledInfo.vue';
import reports from "../components/reports.vue";
import driverLicense from "../components/driverLicense.vue";

export default {
    name: 'ProfilePage',
    components: {
        PersonDetails,
        TitledInfo,
        reports,
        driverLicense
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
.row{
    padding: 10px
}
</style>