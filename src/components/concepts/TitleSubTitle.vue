<template>
  <div style="width: 100%">
    <h2>Title and subtitle</h2>

    <img
      src="../../assets/titleandsubtitle.png"
      alt="highcharts"
      style="width: 100%"
    />

    <div style="border-bottom:2px solid gray;"></div>
    
    <div style="width: 800px; height: 400px">
      <highcharts :options="chartOptions"></highcharts>
    </div>

    <div style="border-bottom:1px solid gray;"></div>
    <h2>title</h2>
    <h3>1. align</h3>
    <div class="form-check form-check-inline">
      <input @click="changeTitleAlign(0)" class="form-check-input" type="radio" name="titleAlignRadio" id="titleAlignRadio1">
      <label class="form-check-label" for="titleAlignRadio1">{{arr[0]}}</label>
    </div>
    <div class="form-check form-check-inline">
      <input @click="changeTitleAlign(1)" class="form-check-input" type="radio" name="titleAlignRadio" id="titleAlignRadio2" checked>
      <label class="form-check-label" for="titleAlignRadio2">{{arr[1]}}</label>
    </div>
    <div class="form-check form-check-inline">
      <input @click="changeTitleAlign(2)" class="form-check-input" type="radio" name="titleAlignRadio" id="titleAlignRadio3">
      <label class="form-check-label" for="titleAlignRadio3">{{arr[2]}}</label>
    </div>

    <h3>2. margin</h3>
    <div class="form-check form-check-inline">
      <input @click="changeMargin(0)" class="form-check-input" type="radio" name="marginRadio" id="marginRadio1">
      <label class="form-check-label" for="marginRadio1">{{marginArr[0]}}</label>
    </div>
    <div class="form-check form-check-inline">
      <input @click="changeMargin(1)" class="form-check-input" type="radio" name="marginRadio" id="marginRadio2" checked>
      <label class="form-check-label" for="marginRadio2">{{marginArr[1]}}</label>
    </div>
    <div class="form-check form-check-inline">
      <input @click="changeMargin(2)" class="form-check-input" type="radio" name="marginRadio" id="marginRadio3">
      <label class="form-check-label" for="marginRadio3">{{marginArr[2]}}</label>
    </div>

    <h3>3. verticalAlign</h3>
    <div class="form-check form-check-inline" v-for="(item,i) in verticalArr" :key="i">
      <input @click="changeVertical(i)" class="form-check-input" type="radio" name="verticalRadio" :id="'verticalRadio' + i" :ref="'verticalRadio' + i">
      <label class="form-check-label">{{item}}</label>
    </div>

    <div style="border-bottom:1px solid gray;"></div>

    <h2>subtitle</h2>
    <h3>1. align</h3>
    <div class="form-check form-check-inline">
      <input @click="changeSubTitleAlign(0)" class="form-check-input" type="radio" name="subtitleAlignRadio" id="subtitleAlignRadio1">
      <label class="form-check-label" for="subtitleAlignRadio1">{{arr[0]}}</label>
    </div>
    <div class="form-check form-check-inline">
      <input @click="changeSubTitleAlign(1)" class="form-check-input" type="radio" name="subtitleAlignRadio" id="subtitleAlignRadio2" checked>
      <label class="form-check-label" for="subtitleAlignRadio2">{{arr[1]}}</label>
    </div>
    <div class="form-check form-check-inline">
      <input @click="changeSubTitleAlign(2)" class="form-check-input" type="radio" name="subtitleAlignRadio" id="subtitleAlignRadio3">
      <label class="form-check-label" for="subtitleAlignRadio3">{{arr[2]}}</label>
    </div>

    <button @click="change">test</button>
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
      this.$refs.verticalRadio0[0].checked = true

      this.cnt++;
    }
    
  }
};
</script>

<style>
</style>