import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist';
import { $http, $axios } from '../services/http-service';


Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
  key: 'vuex',
  storage: window.localStorage
})

export default new Vuex.Store({
  plugins: [vuexLocalStorage.plugin],
  
  state: {
    talks : [],
    talk_events : [],
    attendees : []
  },

  mutations: {
    store_talks : (state, payload) => {
        state.talks = payload;
    },

    store_attendees: (state, payload) => {
      state.attendees = payload;
    },

    store_talk_events: (state, payload) => {
      state.talk_events = payload;
    }
  },

  actions: {
    async get_talks({ commit }){
      const [talks, err] =  await $http.get('talks');
      console.log (talks)
      if(talks && !err){
          commit('store_talks', talks.data.payload);
      }
    },

    async get_attendees({ commit }){
      const [attendees, err] = await $http.get('attendees');
      console.log(attendees)
      if (attendees && !err) {
          commit('store_attendees', attendees.data.payload);
      }
    },

    async get_talk_events({ commit }, talk_id){
      const [talk_events, err] = await $http.get('talk-events/'+talk_id);
      console.log(talk_events)
      if (talk_events && !err) {
          commit('store_talk_events', talk_events.data.payload);
      }
    }
  },

  modules: {
  }
})
