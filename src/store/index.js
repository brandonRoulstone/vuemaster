import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    greeting: [],
    aboutme: [],
    projects: []
  },
  getters: {
  },
  mutations: {
    accessGreetingData(state, info){
      state.greeting = info
    },
    accessAboutData(state, info){
      state.aboutme = info
    },
    accessProjectsData(state, info){
      state.projects = info
    }
  },
  actions: {
    fetchGreetingData(context){
      axios.get("http://localhost:3000/intro")
      .then(i => {
        context.commit('accessGreetingData', i.data)
        // console.log(i.data)
    })
      
    },
    fetchAboutData(context){
      axios.get("http://localhost:3000/reviews")
       .then(i => {context.commit('accessAboutData', i.data) 
      //  console.log(i.data)
    })
    },
    fetchProjectsData(context){
      axios.get("http://localhost:3000/tasks")
      .then(i => {
        context.commit('accessProjectsData', i.data)
        console.log(i.data)
    })
    },
  },
  modules: {
  }
})
