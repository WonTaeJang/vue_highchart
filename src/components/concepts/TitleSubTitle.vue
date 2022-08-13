<template>
  <div style="width: 100%">
    <h2>Title and subtitle</h2>

    <img
      src="../../assets/titleandsubtitle.png"
      alt="highcharts"
      style="width: 100%"
    />

    <p>The title and subtitle can also be moved around by the default attributes of the title and subtitle options (align, float, margin, verticalAlign, x, y).
       For all available options, see 
       <a href="https://api.highcharts.com/highcharts/title?_ga=2.262749132.1359665401.1660392760-512425022.1659867340">options.title</a> and 
       <a href="https://api.highcharts.com/highcharts/subtitle?_ga=2.262749132.1359665401.1660392760-512425022.1659867340">options.subtitle.</a></p>

    <div style="border-bottom:2px solid gray;"></div>
    
    <div style="width: 800px; height: 400px">
      <highcharts :options="chartOptions"></highcharts>
    </div>

    <div style="border-bottom:1px solid gray;"></div>
    <h2>title</h2>
    <h3>1. align</h3>
    <div class="form-check form-check-inline" v-for="(item,i) in arr" :key="i">
      <input @click="changeTitleAlign(i)" class="form-check-input" type="radio" name="titleAlignRadio" :ref="'titleAlignRadio' + i">
      <label class="form-check-label">{{item}}</label>
    </div>

    <h3>2. margin</h3>
    <div class="form-check form-check-inline" v-for="(item,i) in marginArr" :key="i">
      <input @click="changeMargin(i)" class="form-check-input" type="radio" name="marginRadio" :id="'marginRadio' + i" :ref="'marginRadio' + i">
      <label class="form-check-label">{{item}}</label>
    </div>

    <h3>3. verticalAlign</h3>
    <div class="form-check form-check-inline" v-for="(item,i) in verticalArr" :key="i">
      <input @click="changeVertical(i)" class="form-check-input" type="radio" name="verticalRadio" :id="'verticalRadio' + i" :ref="'verticalRadio' + i">
      <label class="form-check-label">{{item}}</label>
    </div>

    <h3>4. color</h3>
    <div class="form-check form-check-inline" v-for="(item,i) in colorArr" :key="i">
      <input @click="changeColor(i)" class="form-check-input" type="radio" name="colorRadio" :ref="'colorRadio' + i">
      <label class="form-check-label">{{item}}</label>
    </div>

    <div style="border-bottom:1px solid gray;"></div>

    <h2>subtitle</h2>

    <h3>1. align</h3>
    <div class="form-check form-check-inline" v-for="(item,i) in arr" :key="i">
      <input @click="changeSubTitleAlign(i)" class="form-check-input" type="radio" name="subtitleAlignRadio" :id="'subtitleAlignRadio' + i" :ref="'subtitleAlignRadio' + i">
      <label class="form-check-label">{{item}}</label>
    </div>
  </div>
</template>

<script>
import { Chart } from "highcharts-vue";

export default {
  data() {
    return {
      cnt : 0,
      arr : ['left', 'center', 'right'],
      marginArr : [0, 15, 50],
      verticalArr : ['top', 'middle', 'bottom'],
      colorArr : ['black', 'red', 'blue'],
      chartOptions: {
        chart: {
        },
        title: {
          text: "My custom Title",
          style: {"color": "red", "fontSize": "25px"} 
        },
        subtitle: {
          text: "My custom subtitle",
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
    changeTitleAlign(n){
      this.chartOptions.title.align = this.arr[n];
    },
    changeSubTitleAlign(n){
      this.chartOptions.subtitle.align = this.arr[n];
    },
    changeMargin(n){
      this.chartOptions.title.margin = this.marginArr[n];
    },
    changeVertical(n){
      this.chartOptions.title.verticalAlign = this.verticalArr[n];
    },
    changeColor(n){
      this.chartOptions.title.style.color = this.colorArr[n] ;
    }
  },
  components: {
    highcharts: Chart,
  },
  created(){

  },
  mounted(){
    // 초기화
    if(this.cnt == 0)
    {
      this.$refs.titleAlignRadio1[0].checked = true
      this.$refs.verticalRadio0[0].checked = true
      this.$refs.marginRadio0[0].checked = true
      this.$refs.subtitleAlignRadio1[0].checked = true
      this.$refs.colorRadio1[0].checked = true

      this.cnt++;
    }
    
  }
};
</script>

<style>
</style>