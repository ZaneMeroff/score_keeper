import Vue from 'vue'
import Vuex from 'vuex'
import Settings from './Settings'

Vue.use(Vuex)

export const store: any = new Vuex.Store({
  // strict: process.env.DEV === 'true',
  state: {},
  modules: {},
  // plugins: [vuexLocal.plugin]
})

export const stateSettings = new Settings({ store, name: 'Settings' });

// export default new Vuex.Store({
//   state: {
//     darkMode: true
//   },
//   mutations: {
//     setDarkMode (state) {
//       state.darkMode = !state.darkMode
//     }
//   },
//   actions: {

//   },
//   modules: {
//   }
// })


