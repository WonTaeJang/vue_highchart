// [main.js 설명]
// 1. 애플리케이션 진입점으로 Vue 초기화, 폴더 , 전역, 컴포넌트 , 라이브러리 등록 수행 실시
// 2. import App 을 사용해 최상위 App.vue 컴포넌트 지정 실시
// 3. createApp mount 를 사용해 index.html 파일 div id 값 설정 및 렌더링 시작점 지정 실시
// 4. router : 라우터는 웹페이지 간의 이동하는 방법 및 경로를 설정해주는 파일입니다
// 5. app.config.globalProperties : 글로벌 변수를 선언합니다. 변수 명칭은 $변수명칭 을 지정합니다

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import HighchartsVue from 'highcharts-vue'
import store from '@/store/store.js'

let app = createApp(App);
app.use(HighchartsVue);
app.use(router);
app.use(store);
app.mount('#app');
