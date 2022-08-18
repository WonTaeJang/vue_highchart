<template>
  <div class="sidenav">
    <a :class="{highlight: getStep == 0, pointer: true}" @Click="clickSide(0)">Title and subtitle</a>
    <a :class="{highlight: getStep == 1, pointer: true}" @Click="clickSide(1)">Axes</a>
    <a :class="{highlight: getStep == 2, pointer: true}" @Click="clickSide(2)">Series</a>
    <a :class="{highlight: getStep == 3, pointer: true}" @Click="clickSide(3)">Tooltip</a>
    <a :class="{highlight: getStep == 4, pointer: true}" @Click="clickSide(4)">Legend</a>
    <a :class="{highlight: getStep == 5, pointer: true}" @Click="clickSide(5)">Plot bands and plot lines</a>
  </div>

  <div class="main">
    <div v-if="getStep == 0"><Title/></div>
    <div v-if="getStep == 1"><Axes/></div>
    <div v-if="getStep == 2"><Series/></div>
    <div v-if="getStep == 3"><Tooltip/></div>
    <div v-if="getStep == 4"><Legend/></div>
  </div>
</template>

<script>
import Series from '@/components/concepts/Series.vue'
import Axes from '@/components/concepts/Axes.vue'
import Title from '@/components/concepts/TitleSubTitle.vue'
import Tooltip from '@/components/concepts/ToolTip.vue'
import Legend from '@/components/concepts/Legend.vue'

export default {
  data(){
    return {
      step: this.$store.state.localStore.step,
    }
  },
  computed: {
    getStep(){
      return this.$store.state.localStore.step;
    }
  },
  components : {
    Series,
    Title,
    Axes,
    Tooltip,
    Legend,
  },
  methods:{
    clickSide(el){
      this.$store.commit("setStep", el);
      this.step = this.$store.state.localStore.step;
    }
  },
  created() {
    
  },
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
  color: #818181;
}

.sidenav a:hover {
  color: black;
}

.highlight {
  color: black;
}

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
  display: block;
}

.main {
  margin-left: 160px; /* Same as the width of the sidenav */
  font-size: 28px; /* Increased text to enable scrolling */
  padding: 0px 10px;
}


</style>