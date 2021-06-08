<template>
    <v-card
    :color="bgColor"
    dark
    class="mx-auto rounded-card"
    width="56vw"
    outlined
  >
  <v-container>
      <v-row>
          <v-col>
    <v-card-actions>
        <v-container v-if="wantedButtonStatus">
            <v-row>
                <h1 class="text-center mx-auto">{{lock_title}}</h1>
            </v-row>
            <v-row>
                <div class="text-center mx-auto">
                    <v-btn 
                        outlined
                        rounded
                        text
                        x-large
                        icon
                        @click="updateWantedState"
                    >
                        <v-icon :color ="state_color" :class="lock_icon"></v-icon>
                    </v-btn>
                </div>
            </v-row>
        </v-container>
    </v-card-actions>
    </v-col>
          <v-col>
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="text mb-1 text-lg-right">
            <strong>פלאפון</strong>
          {{person.phone_number}}
        </v-list-item-title>
        <div class="text-overline-h4 mb-4 text-lg-right">
          <strong>כתובת </strong>
          {{person.address}}
        </div>
        
      </v-list-item-content>

      
    </v-list-item>
    
    </v-col>
      <v-col>
    <v-list-item two-line>
      <v-list-item-content>
        <div class="text-overline-h4 mb-4 text-lg-right">
          <strong>{{person.first_name + " " + person.last_name}}</strong>
        </div>
        <v-list-item-title class="text mb-1 text-lg-right">
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
        class=" mx-auto"
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
        },
        bgColor: {
            type: String,
            required: true
        },
        wantedButtonStatus: {
            type: Boolean,
            required: true
        }
    },
    computed: {
        state_color : function () {
            return this.person.is_wanted ? 'red' : 'green';
        },
        lock_icon : function () {
            return this.person.is_wanted ? 'fas fa-lock' : 'fas fa-lock-open';
        },
        lock_title : function () {
            return this.person.is_wanted ? 'מבוקש' : 'חשוד';
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
.rounded-card{
    border-radius:10px;
}
</style>