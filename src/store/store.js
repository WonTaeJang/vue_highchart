// [store > store.js 설명]
// 1. store : 모든 컴포넌트가 공유할 수 있는 싱글톤 방식의 데이터 저장소입니다
// 2. main.js 파일에서 시작점 진입 시 등록 필요

// [vuex import 수행 실시]
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import localStore from '@/store/modules/localStore.js'

const store = new Vuex.Store({
    modules: {
        localStore : localStore,
    },
    plugins: [createPersistedState({
        paths: ["localStore"]
    })]
})

export default store;