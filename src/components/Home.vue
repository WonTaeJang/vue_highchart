<template>
  <div style="width: 100%">
    <h1>Understanding Highcharts</h1>
    <p>
      To understand how Highcharts works, it is important to understand the
      various parts, or concepts, of a chart.
    </p>

    <p>The image below describes the main concepts in a chart.</p>

    <img
      src="../assets/understanding_highcharts.png"
      alt="highcharts"
      style="width: 100%"
    />

    <h2>Title</h2>
    <p>
      Text that describes the chart. Usually located at the top of the chart.
    </p>

    <h2>Series</h2>
    <p>One or more series of data presented on the chart.</p>

    <h2>Tooltip</h2>
    <p>
      When hovering over a series or a point on the chart, you can get a tooltip
      that describes the values in that particular part of the chart.
    </p>

    <h2>Legend</h2>
    <p>
      The legend shows the data series in the chart and allows you to enable and
      disable one or more series.
    </p>

    <h2>Axes</h2>
    <p>
      Most charts, like the typical cartesian line chart and the column chart,
      have two axes to measure and categorize data: a vertical axis (y-axis) and
      a horizontal axis (x-axis). 3D charts have a third axis, a depth axis
      (z-axis). Polar charts, also known as radar charts, only have one axis
      that spans around the perimeter of the chart. Gauge charts, also known as
      speedometer charts, can even have a single value axis. Pie charts,
      however, have no axes.
    </p>
  </div>
</template>

<script>
export default {
  name: "MyHome",
};
</script>

<style>
</style>