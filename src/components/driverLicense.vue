<template>
  <div class="driverLicense">
    <template>
  <v-card
    color="#2A2B38"
    style="color:white;"
    class="mx-auto" 
    max-width="344"
  >
    <v-card-title  class="justify-center">
      <h2 class="justify-center">
        רשיון נהיגה
      </h2>
      </v-card-title>
      <v-row>
      <h4 class="status" >
        סטטוס {{status}}     
      </h4>
      </v-row>
      <v-row>
      <b class="date text-center" >
      <br>
      תאריך
      </b>
      </v-row>
      <v-container class=" ">
    <v-row >
      
        <v-col :key="n" class="colStyle">
          <h4 class="text-center">
            סיום
            {{endDate
            }}
         </h4>
        </v-col>
        <v-responsive
          v-if="n === 2"
          :key="`width-${n}`"
          width="100%"
        ></v-responsive>
        <v-col :key="n">
         <h4 class="text-center">
            התחלה
            {{startDate}}
         </h4>
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