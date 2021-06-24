import Vue from 'vue'
import Vuex from 'vuex'
import Settings from './Settings'
import Players from './Players'

Vue.use(Vuex)

export const store: any = new Vuex.Store({
  // strict: process.env.DEV === 'true',
  state: {},
  modules: {},
  // plugins: [vuexLocal.plugin]
})

export const stateSettings = new Settings({ store, name: 'Settings' })
export const statePlayers= new Players({ store, name: 'Players' })


