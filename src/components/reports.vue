<template>
  <div class="driverLicense">
    <template  >
  <v-card class="mx-auto" max-width="344" >
    <v-card-title  class="justify-center">
      <h1 class="justify-center">
 צווים ודוחות
      </h1>
      </v-card-title>
       <v-container>
    <v-row no-gutters >
      <template v-for="n in reportsList.length -1">
        <v-col :key="n">
          <v-card
            class="pa-2" 
            
            
          >
           <v-row no-gutters>
      <v-col>
        <v-card
        
          class="pa-2"
          outlined
          tile
        >
        <h4 >
             סוף תוקף
             </h4>
             <div>
          {{reportsList[n].ending_date}}
          </div>
          
        </v-card>

      </v-col >
      <v-col order="12">
        <v-card
          class="pa-2"  
          outlined
          tile
        >
        <h3 >
          {{reportsList[n].permition_desc}}
          </h3>
        </v-card>
      </v-col>
      <v-col >
        <v-card
          class=" pa-2"
          outlined
          tile
        >
        <h4>
        תחילת תוקף
        </h4 >
        <div>
          {{reportsList[n].starting_date}}
          </div>
        </v-card>
      </v-col>
    </v-row>
          </v-card>
        </v-col>
        <v-responsive
          v-if="n === n"
          :key="`width-${n}`"
          width="100%"
        ></v-responsive>
      </template>
    </v-row>
  </v-container>
     

  </v-card>
</template>
  </div>
</template>
<script>
export default {
  name: 'driverLicense',
  data () {
    return {
       
        startDate: "10\\2\\2001",
        endDate:"10\\2\\2001" ,
        reportType:"",
        reportsList: [{},{ starting_date: "10\\2\\2001" , ending_date: "10\\2\\2001", permition_desc: "דוח תנועה"  
        },
        { starting_date: "10\\2\\2002" , ending_date: "10\\2\\2002", permition_desc: "דוח רעש"  
        },
        { starting_date: "10\\2\\2003" , ending_date: "10\\2\\2003", permition_desc: "מעבר חצייה"
        }]

    }
  }
}
</script>

<style scoped>
.v-card{
  background-color: #2A2B38;
  color:white;
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