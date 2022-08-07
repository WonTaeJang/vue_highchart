import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import HighchartsVue from 'highcharts-vue'

let app = createApp(App);
app.use(HighchartsVue);
app.use(router);
app.mount('#app');
