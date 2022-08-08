<template>
  <highcharts :options="chartOptions"></highcharts>
</template>

<script>
import { mapChart } from "highcharts-vue";

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
    highcharts: mapChart,
  },
};
</script>

<style>
</style>