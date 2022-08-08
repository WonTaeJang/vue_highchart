<template>
  <highcharts :options="chartOptions"></highcharts>
</template>

<script>
import { stockChart } from "highcharts-vue";

export default {
  data() {
    return {
      chartOptions: {
        series: [
          {
            name: "Jane",
            data: [1, 0, 4],
          },
          {
            name: "John",
            data: [5, 7, 3],
          },
        ],
      },
    };
  },
  components: {
    highcharts: stockChart,
  },
};
</script>

<style>
</style>