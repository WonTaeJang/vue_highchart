<template>
  <div style="width: 100%">
    <h2>Title and subtitle</h2>

    <img
      src="../../assets/titleandsubtitle.png"
      alt="highcharts"
      style="width: 100%"
    />
    <button @click="change">test</button>
    <div style="width: 800px; height: 400px">
      <highcharts :options="chartOptions"></highcharts>
    </div>
  </div>
</template>

<script>
import { Chart } from "highcharts-vue";

export default {
  data() {
    return {
      chartOptions: {
        chart: {
        },
        title: {
          text: "My custom Title",
          style: {"color": "red", "fontSize": "25px"} 
        },
        subtitle: {
          text: "My custom subtitle",
          align: 'right'
        },
        xAxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        },
        series: [
          {
            data: [
              29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4,
              194.1, 95.6, 54.4,
            ],
          },
        ],
      },
    };
  },
  methods:{
    change(){
      this.chartOptions.subtitle.align = 'center'
    }
  },
  components: {
    highcharts: Chart,
  },
  mounted(){
    //this.chartOptions.setTitle({ style: { color: 'red' } },{ style: { color: 'green' } });
  }
};
</script>

<style>
</style>