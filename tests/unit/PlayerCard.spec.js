import { createLocalVue, shallowMount } from '@vue/test-utils'
import { statePlayers } from '@/store/index'
import PlayerCard from '@/components/PlayerCard.vue'
import Quasar, * as All from 'quasar'
import uuid from 'uuid/v4'
import Vuex from 'vuex'

// --------- Vuex & Quasar setup -------------

const localVue = createLocalVue()
localVue.use(Vuex, Quasar, {components: All, directives: All, plugins: All})

// ---------------- mocks --------------------

jest.mock('uuid/v4')
uuid.mockImplementation(() => '12345')

// ------------ create player ----------------

statePlayers.action_createPlayers(1)

// -------------------------------------------

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

        console.log('before: ', statePlayers.getPlayerData[propsData.playerId].score)

        statePlayers.action_setPlayerScore({ id: '12345', score: 8 })
        expect(statePlayers.getPlayerData[propsData.playerId].score).toEqual(8)

        // need to set new score value from slider's value

        component.vm.updateScore()

        console.log('after: ', statePlayers.getPlayerData[propsData.playerId].score)

        // ************************************************
        // ************************************************
        // ***************  incomplete  *******************
        // ************************************************
        // ************************************************

        // expect player's score to update in the store
      })
    })
  })
})