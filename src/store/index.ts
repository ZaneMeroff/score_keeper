import Vue from 'vue'
import Vuex from 'vuex'
import Modals from './Modals'
import Players from './Players'
import Settings from './Settings'

Vue.use(Vuex)

export const store: any = new Vuex.Store({
  // strict: process.env.DEV === 'true',
  state: {},
  modules: {},
  // plugins: [vuexLocal.plugin]
})

export const stateModals= new Modals({ store, name: 'Modals' })
export const statePlayers= new Players({ store, name: 'Players' })
export const stateSettings = new Settings({ store, name: 'Settings' })
