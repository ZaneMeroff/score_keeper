import { createLocalVue, shallowMount } from '@vue/test-utils'
import PlayerCard from '@/components/PlayerCard.vue'
import Quasar, * as All from 'quasar'

// ------------ Quasar setup ----------------

const localVue = createLocalVue()
localVue.use(Quasar, {components: All, directives: All, plugins: All})

// ------------------------------------------

describe('PlayerCard', () => {

  describe("snapshots", () => {

    it("should render with default html", () => {
      const propsData = { playerId: '321c2011-8db7-455d-adee-4ba1bd64ec69' }
      const component = shallowMount(PlayerCard, { localVue, propsData })

      component.setData({
        statePlayers: {
          getPlayerData: {
            '321c2011-8db7-455d-adee-4ba1bd64ec69': {
              id: '321c2011-8db7-455d-adee-4ba1bd64ec69',
              name: 'Player 1',
              score: 0,
              color: '#AE7FF8',
            }
          }
        }
      })
      // ************************************************
      // ************************************************
      // ***************  incomplete  *******************
      // ************************************************
      // ************************************************
      // ************************************************
      expect(component.element).toMatchSnapshot()
    })
  })

  describe('props', () => {

    describe('playerId', () => {
      
      it.only('should accept a function', () => {
        const propsData = { playerId: '321c2011-8db7-455d-adee-4ba1bd64ec69' }
        const component = shallowMount(PlayerCard, { localVue, propsData })
        // ************************************************
        // ************************************************
        // ***************  incomplete  *******************
        // ************************************************
        // ************************************************
        // ************************************************
        expect(component.vm.$props.playerId).toEqual(propsData.playerId)
      })
    })
  })
})