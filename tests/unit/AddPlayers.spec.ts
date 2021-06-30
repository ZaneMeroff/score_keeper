import { createLocalVue, shallowMount } from '@vue/test-utils'
import { store } from "@/store/index"
import AddPlayers from '@/components/modals/AddPlayers.vue'
import Vuex from "vuex"

import { Quasar, QDialog, QCard, QCardSection, QSeparator, QInput, QBtnGroup, QBtn } from 'quasar'

// --------- Vuex setup ------------

const localVue = createLocalVue()
localVue.use(Vuex, Quasar, { components: { QDialog, QCard, QCardSection, QSeparator, QInput, QBtnGroup, QBtn } })

// ---------------------------------

describe('AddPlayers', () => {

  describe("snapshots", () => {

    it("should render with default html", () => {
      const component = shallowMount(AddPlayers)

      expect(component.element).toMatchSnapshot()
    })


  })


})
