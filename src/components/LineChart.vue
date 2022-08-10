<template>
  <div class="sidenav">
    <a @Click="step = 1">Title and subtitle</a>
    <a href="#about">Axes</a>
    <a @Click="step = 0">Series</a>
    <a href="#about">Tooltip</a>
    <a href="#services">Legend</a>
    <a href="#clients">Plot bands and plot lines</a>
  </div>

  <div class="main">
    <div v-if="step == 1"><Title/></div>
    <div v-if="step == 0"><Series/></div>
  </div>
</template>

<script>
import Series from '@/components/concepts/Series.vue'
import Title from '@/components/concepts/TitleSubTitle.vue'

export default {
  data(){
    return {
      step: 0,
    }
  },
  components : {
    Series,
    Title,
  },
  created() {

  },
};
</script>

<style scoped>
.sidenav {
  height: 100%;
  width: 200px;
  position: fixed;
  z-index: 1;
  top: 56px;
  left: 0;
  /* background-color: #111; */
  overflow-x: hidden;
  padding-top: 20px;
}

.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 20px;
  color: #818181;
  display: block;
}

.sidenav a:hover {
  color: black;
}

.main {
  margin-left: 160px; /* Same as the width of the sidenav */
  font-size: 28px; /* Increased text to enable scrolling */
  padding: 0px 10px;
}


</style>