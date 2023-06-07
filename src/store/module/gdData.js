const state = ()=>({
    expandMenuIndex:[]

})

const actions={
    setExpandMenuIndex (state,data){
        state.commit('setExpandMenuIndex',data)
    }
}

const  mutations ={
    setExpandMenuIndex (state,data){
        state.expandMenuIndex =data
    }
}
export default {
    namespaced:true,
    state,
    actions,
    mutations
}