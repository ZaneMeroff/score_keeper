import Vue from 'vue'

import './styles/quasar.sass'
import '@quasar/extras/material-icons/material-icons.css'
import { Quasar } from 'quasar'

Vue.use(Quasar, {
  config: {},
  components: [ 
    'QDialog',
    'QCard',
    'QCardSection',
    'QSeparator',
    'QInput',
    'QBtnGroup',
    'QBtn'
  ],
  plugins: {
  }
 })