const localStore = {
    state: {
        step : 0,
    },
    mutations: {
        setStep(state, payload){
            state.step = payload
        },
    },
    actions: {
        // axios
    }
}

export default localStore