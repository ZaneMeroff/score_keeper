import { createLocalVue, shallowMount } from '@vue/test-utils'
import { statePlayers } from '@/store/index'
import PlayerCard from '@/components/PlayerCard.vue'
import Quasar, * as All from 'quasar'
import uuid from 'uuid/v4'
import Vuex from 'vuex'

// ------------ Quasar & Vuex setup ----------------

const localVue = createLocalVue()
localVue.use(Vuex, Quasar, {components: All, directives: All, plugins: All})

// ----------------- Mocks -------------------------

jest.mock('uuid/v4')
uuid.mockImplementation(() => '12345')

// ----------------- Setup -------------------------

statePlayers.action_createPlayers(1)

// -------------------------------------------------

describe('PlayerCard', () => {

  describe("snapshots", () => {

    it("should render with default html", () => {
      statePlayers.action_createPlayers(1)
      const propsData = { playerId: '12345' }
      const component = shallowMount(PlayerCard, { localVue, propsData })

      expect(component.element).toMatchSnapshot()
    })
  })

  describe('props', () => {

    describe('playerId', () => {
      
      it('should accept a function', () => {
        const propsData = { playerId: '12345' }
        const component = shallowMount(PlayerCard, { localVue, propsData })

        expect(component.vm.$props.playerId).toEqual(propsData.playerId)
      })
    })
  })

  describe('methods', () => {

    describe('updateScore', () => {
      
      it.skip('should update target player score', () => {
        const propsData = { playerId: '12345' }
        const component = shallowMount(PlayerCard, { localVue, propsData })

        // need to update value of slider
        console.log(statePlayers.getPlayerData[propsData.playerId].score)
        const score = statePlayers.getPlayerData[propsData.playerId].score
        // ************************************************
        // ************************************************
        // ***************  incomplete  *******************
        // ************************************************
        // ************************************************
        const expected = 5
        expect(score).toEqual(expected)
      })
    })
  })
})