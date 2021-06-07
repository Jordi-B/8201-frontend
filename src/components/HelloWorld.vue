<template>
  <v-container>
    <person-detail :person="person" @change-wanted-state="changeWantedState" bgColor="#2A2B38" :wantedButtonStatus="wantedButton"></person-detail>
    <titled-info bgColor="black" amountColor="red" amount="90" title=" שלום מה נשמע איתכם"></titled-info>
    <titled-info bgColor="pink" amountColor="green" amount="3" title=" שלום מה נשמ   ע איתכם"></titled-info>
  </v-container>
</template>

<script>
import PersonDetail from "./PersonDetails.vue"
import TitledInfo from "./TitledInfo.vue"
  export default {
    name: 'HelloWorld',
    components: {
      PersonDetail,
      TitledInfo
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
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
      
    }),
  }
</script>