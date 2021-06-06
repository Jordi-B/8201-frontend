<template>
    <v-card
    color="#4A148C"
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
      >
       <v-icon color ="green">
      
      fas fa-lock
    </v-icon>
    
      </v-btn>
    <i class="fas fa-lock"></i>   
    </v-card-actions>
    </v-col>
          <v-col>
    <v-list-item two-line>
      <v-list-item-content>
        <div class="text-overline-h4 mb-4">
          <strong>כתובת </strong>
          <div>{{person.address}}</div>
        </div>
        <v-list-item-title class="text mb-1">
          123456789
        </v-list-item-title>
      </v-list-item-content>

      
    </v-list-item>
    
    </v-col>
      <v-col>
    <v-list-item two-line>
      <v-list-item-content>
        <div class="text-overline-h4 mb-4">
          <strong>mor steinberg</strong>
        </div>
        <v-list-item-title class="text mb-1">
          123456789
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
    }
}
</script>

<style scoped>

</style>