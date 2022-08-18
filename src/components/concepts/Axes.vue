<template>
  <div>
    <h2>Axes</h2>

    <img
      src="../../assets/axis_description.png"
      alt="highcharts"
      style="width: 100%"
    />

    <div style="width: 800px; height: 400px">
      <highcharts :options="chartOptions"></highcharts>
    </div>
  </div>
</template>

<script>
import { Chart } from "highcharts-vue";

export default {
  name: "AxesChart",
  data() {
    return {
      chartOptions: {
        chart: {
          // renderTo: 'container',
          // type: 'column'
        },
        title: {
          text: 'Fruit Consumption',
        },
        subtitle: {
          text: "My custom subtitle",
        },
        // Categories are set by using an array
        xAxis: {
            title: {
                text: 'Fruit Number'
            },
            tickInterval: 1
        },
        yAxis: [
          {
            //--- Primary yAxis
            title: {
                text: 'Fruit eaten'
            },
            // tickInterval: 1
          },
          {
            //--- Secondary yAxis
            title: {
              text: "Rainfall",
            },
            opposite: true,   // opposite: true 일때 우측에 표시
          },
        ],
        series: [
          {
            yAxis: 0,
            type: "column",
            data: [
              49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4,
              194.1, 95.6, 54.4,
            ],
          },
          {
            yAxis: 1,
            data: [
              7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9,
              9.6,
            ],
          },
        ],
      },
    };
  },
  components: {
    highcharts: Chart,
  },
};
</script>

<style>
</style>