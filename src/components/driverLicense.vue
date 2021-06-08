<template>
  <div class="driverLicense">
    <template>
  <v-card
    style="color:white;"
    class="mx-auto cardMain blue " 
    max-width="344"
  >
    <v-card-title  class="justify-center blue">
      <h1 class="justify-center">
        רשיון נהיגה
      </h1>
      </v-card-title>
      <v-row>
      <h2 class="status blue" >
         סטטוס        {{status}}
      </h2>
      </v-row>
      <v-row>
      <b class="date" >
      <br>
      תאריך
      </b>
      </v-row>
      <v-container class=" ">
    <v-row >
      
        <v-col :key="n" class="colStyle">
          <h2>
            סיום
            {{endDate
            }}
         </h2>
        </v-col>
        <v-responsive
          v-if="n === 2"
          :key="`width-${n}`"
          width="100%"
        ></v-responsive>
        <v-col :key="n">
         <h2>
            התחלה
            {{startDate}}
         </h2>
        </v-col>
        <v-responsive
          v-if="n === 2"
          :key="`width-${n}`"
          width="100%"
        ></v-responsive>
       
    </v-row>
    
  </v-container>

  <br>
  <v-row class="justify-center">
  <h2 class="justify-center">
  מספר רישיון
    <br>
    <div style="margin-left: 2vh">
  {{licenseNumber}}
  </div>
  </h2>
  </v-row>


  </v-card>
</template>
  </div>
</template>
<script>
export default {
  name: 'driverLicense',
  data () {
    return {
        status: "33233",
        startDate: "10\\2\\2001",
        endDate:"10\\2\\2001" ,
        licenseNumber: "000000", 
    }
  }
}
</script>
.mx-auto{
    
}
<style scoped>
.cardMain{
    background : "blue"
}
.status{
    margin-top: 1vh;
    margin-left: 23vh ;
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
</style>