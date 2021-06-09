<template>
  <div class="driverLicense">
    <template>
  <v-card
    color="#2A2B38"
    style="color:white;"
    class="mx-auto rounded-card" 
    width="270"
    height="580"
  >
    <v-card-title  class="justify-center">
      <h2 class="justify-center">
        רשיון נהיגה
      </h2>
      </v-card-title>
      <v-row>
      <h4 class="status" v-if="this.license" >
        סטטוס {{license.status === '1' ? 'לא פעיל':'פעיל'}}     
      </h4>
      <span v-else class="status-error">לא נמצא רישיון נהיגה</span>
      </v-row>
      <v-row>
      <b class="date text-center" v-if="this.license">
      <br>
      תאריך
      </b>
      </v-row>
      <v-container class=" ">
    <v-row >
      
        <v-col class="colStyle">
          <h4 class="text-center" v-if="this.license">
            סיום
            {{this.formmatDate(license.endingDate)}}
         </h4>
        </v-col>
        <v-responsive
          width="100%"
        ></v-responsive>
        <v-col>
         <h4 class="text-center begin" v-if="this.license">
            התחלה
            {{this.formmatDate(license.startingDate)}}
         </h4>
        </v-col>
        <v-responsive
          width="100%"
        ></v-responsive>
       
    </v-row>
    
  </v-container>

  <br>
  <v-row class="justify-center">
  <h2 class="justify-center" v-if="this.license">
  מספר רישיון
    <br>
    <div style="margin-left: 2vh">
  {{license.licenseNumber}}
  </div>
  </h2>
  </v-row>


  </v-card>
</template>
  </div>
</template>
<script>
import api from '../api/api';

export default {
  name: 'driverLicense',
  props: {
    personId: {
      type: String,
      required: true
    }
  },
  methods : {
    formmatDate : function (date) {
      const newDate = new Date(date)
      return (newDate.toLocaleDateString('he-IL'))
    }
  },
  data () {
    return {
      license : {} 
    }
  },
  async mounted() {
    const response = await api.profile().getLicenseById(this.personId);
    this.license = response.data[0];
    }
  }
</script>

<style scoped>
.status{
    margin-top: 1vh;
    margin-left: 23vh;
    color: green;
}
.rounded-card{
    border-radius:10px;
}
.date{
    margin-left: 17vh;
}
.colStyle{
    margin-left: 7vh
}
.colStyleDate{
    margin-left: 4vh;
    margin-bottom: 10vh;
}

.begin {
  margin-left: 55px;
}

.status-error {
  margin-left: 75px;
}
</style>