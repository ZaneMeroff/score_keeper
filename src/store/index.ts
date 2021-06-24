import Vue from 'vue'
import Vuex from 'vuex'
import Settings from './Settings'
import Scores from './Scores'

Vue.use(Vuex)

export const store: any = new Vuex.Store({
  // strict: process.env.DEV === 'true',
  state: {},
  modules: {},
  // plugins: [vuexLocal.plugin]
})

export const stateSettings = new Settings({ store, name: 'Settings' })
export const stateScores= new Settings({ store, name: 'Scores' })


