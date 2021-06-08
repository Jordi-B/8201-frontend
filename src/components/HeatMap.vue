<template>
  <div class="hello">
    <line-chart :chart-data="{
        labels,
        datasets: [
        {
            data,
            label,
            borderColor,
            fill
        }]
    }"></line-chart>
  </div>
</template>

<script>
import LineChart from "./LineChart.js";

export default {
  name: "HeatMap",
  components: {
    LineChart
  },
  data() {
    return {
    //   datacollection: {
    //     labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28" ],
    //     datasets: [
    //       {
    //         data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478, 114, 106, 106, 107, 111, 133, 221, 783, 2478, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
    //         label: "כמות פוסטים",
    //         borderColor: "#3e95cd",
    //         fill: false
    //       }
    //     ]
    //   }
    currentMonth: 0,
    labels: [],
    data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478, 114, 106, 106, 107, 111, 133, 221, 783, 2478, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
    label: 'כמות פוסטים',
    borderColor: '#3e95cd',
    fill: false
    };
  },

  props: {
      personId: {
          type: String,
          required: true
      }
  },

  created() {
      this.currentMonth = new Date().getMonth() + 1;
      this.labels = ["1", "2", "3", "4", "5", "6", "7",
       "8", "9", "10", "11", "12", "13", "14",
        "15", "16", "17", "18", "19", "20", "21",
         "22", "23", "24", "25", "26", "27", "28" ].map(day => `${day}.${this.currentMonth}`);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
