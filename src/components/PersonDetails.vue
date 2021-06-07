<template>
    <v-card
    color="#2A2B38"
    dark
    class="mx-auto"
    max-width="1000"
    outlined
  >
  <v-container>
      <v-row>
          <v-col>
    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
        @click="updateWantedState"
      >
       <v-icon :color ="state_color" :class="lock_icon"></v-icon>
      </v-btn>
    </v-card-actions>
    </v-col>
          <v-col>
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="text mb-1">
            <strong>פלאפון</strong>
          {{person.phone_number}}
        </v-list-item-title>
        <div class="text-overline-h4 mb-4">
          <strong>כתובת </strong>
          {{person.address}}
        </div>
        
      </v-list-item-content>

      
    </v-list-item>
    
    </v-col>
      <v-col>
    <v-list-item two-line>
      <v-list-item-content>
        <div class="text-overline-h4 mb-4">
          <strong>{{person.first_name + " " + person.last_name}}</strong>
        </div>
        <v-list-item-title class="text mb-1">
          {{person.id}}
        </v-list-item-title>
      </v-list-item-content>

      
    </v-list-item>
    
    </v-col>
    
    <v-col>
        <v-list-item-avatar
        tile
        size="120"
        color="grey"
      ></v-list-item-avatar>
    </v-col>

    </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
    props: {
        person: {
            type: Object,
            required: true
        }
    },
    computed: {
        state_color : function () {
            return this.person.is_wanted ? 'red' : 'green';
        },
        lock_icon : function () {
            return this.person.is_wanted ? 'fas fa-lock' : 'fas fa-lock-open';
        }
    },
    methods:{
      updateWantedState: function(){
          
         this.$emit("change-wanted-state") ;
      }
    }
}
</script>

<style scoped>

</style>