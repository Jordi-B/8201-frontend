<template>
  <div class="driverLicense ">
    <template  >
  <v-card class="mx-auto cardMain blue" max-width="344" style="color:white;">
    <v-card-title  class="justify-center">
      <h1 class="justify-center blue" style="color:white;">
 צווים ודוחות
      </h1>
      </v-card-title>
       <v-container class="blue" style="color:white;">
    <v-row no-gutters class = "blue" style="color:white;">
      <template v-for="n in reportsList.length -1 " class = "blue" style="color:white;">
        <v-col :key="n" class = "blue" style="color:white;">
          <v-card
            class=" blue pa-2 " style="color:white;"
            
            
          >
           <v-row no-gutters class = "blue" style="color:white;">
      <v-col class = "blue" style="color:white;">
        <v-card
        style="color:white;"
          class=" blue pa-2"
          outlined
          tile
        >
        <h4 class= "blue" style="color:white;">
             סוף תוקף
             </h4>
             <div class = "blue" style="color:white;">
          {{reportsList[n].ending_date}}
          </div>
          
        </v-card>

      </v-col >
      <v-col class= "blue" order="12" style="color:white;" >
        <v-card
          class=" blue pa-2
        " style="color:white;" 
          outlined
          tile
        >
        <h3 class = "blue" style="color:white;">
          {{reportsList[n].permition_desc}}
          </h3>
        </v-card>
      </v-col>
      <v-col >
        <v-card
          class="blue pa-2" style="color:white;"
          outlined
          tile
        >
        <h4 class = "blue" style="color:white;">
        תחילת תוקף
        </h4 >
        <div class="blue" style="color:white;">
          {{reportsList[n].starting_date}}
          </div>
        </v-card>
      </v-col>
    </v-row>
          </v-card>
        </v-col>
        <v-responsive class = "blue" style="color:white;"
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