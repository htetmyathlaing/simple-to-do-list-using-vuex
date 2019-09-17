import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


export default new Vuex.Store({
    state: {
      toDoList: [],
      filter: 'all'
    },
    getters:{
      count: state =>{
        return state.toDoList.length
      },
      filteredList: state=> {
        switch (state.filter) {
          case 'all':
            return state.toDoList
          case 'finished':
            return state.toDoList.filter(item => item.done == true)
          case 'unfinished':
            return state.toDoList.filter(item => item.done == false)
  
        }
      },
    },
    mutations: {
      addTask(state, payload) {
        state.toDoList.unshift(payload)
      },
      toggleDone(state, payload) {
        state.toDoList.find(item => item.id == payload).done = !state.toDoList.find(item => item.id == payload).done
      },
      deleteTask(state, payload) {
        state.toDoList = state.toDoList.filter(item => item.id != payload)
      },
      changeFilter(state, payload) {
        state.filter = payload
      }
    },
    actions: {
      addTask({getters, commit}, payload){
        commit('addTask', {id: getters.count+1, name: payload, done: false})
        commit('changeFilter', 'all')
      }
    }
  })