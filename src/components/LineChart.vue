<template>
  <div class="mx-auto" style="width: 800px; height: 400px">
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script>
import { Chart } from "highcharts-vue";

export default {
  data() {
    return {
      chartOptions: {
        chart: {
          renderTo: "container",
          type: "spline",
        },
        title: {
          text: "Main Title",
        },
        subtitle: {
          text: "Sub Title",
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
        yAxis: { type: "linear" },
        plotOptions: {
          series: [
            {
              // POINT SELECTION
              allowPointSelect: true,
            },
          ],
          line: {
            dataLabels: {
              // data 값 시각화
              enabled: true,
            },
          },
        },
        series: [
          {
            data: [
              29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4,
              194.1, 95.6, 54.4,
            ],
            dashStyle: "longdash",
            zones: [
              // zone value 범위 내에 있다면 해당색으로 표시
              {
                value: 100,
                color: "#f7a35c",
              },
              {
                value: 150,
                color: "#7cb5ec",
              },
              {
                color: "#90ed7d",
              },
            ],
          },
          {
            // LINE WIDTH
            data: [216.4, 194.1, 95.6, 216.4, 194.1, 95.6],
            lineWidth: 5,
            //dashStyle: "shortdot",
            zoneAxis: "x",  // zone의 기준을 y -> x 로 변경
            zones: [
              {
                value: 4,
              },
              {
                dashStyle: "dot",
              },
            ],
          },
        ],
      },
    };
  },
  components: {
    highcharts: Chart,
  },
  created() {},
};
</script>

<style>
</style>