import { createLocalVue, shallowMount } from '@vue/test-utils'
import { statePlayers } from '@/store/index'
import NumSelector from '@/components/NumSelector.vue'
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

describe('NumSelector', () => {

  describe('snapshots', () => {

    it('should render with default html', () => {
      const propsData = { playerId: '12345' }
      const component = shallowMount(NumSelector, { localVue, propsData })
      
      expect(component.element).toMatchSnapshot()
    })
  })

  describe('props', () => {

    describe('playerId', () => {

      it('should accept a string', () => {
        const propsData = { playerId: '12345' }
        const component = shallowMount(NumSelector, { localVue, propsData })
        
        expect(component.vm.$props.playerId).toEqual(propsData.playerId)
      })
    })
  })

  describe('data', () => {

    describe('slideRange', () => {

      it('should have a default value of []', () => {
        const propsData = { playerId: '12345' }
        const component = shallowMount(NumSelector, { localVue, propsData })
        
        const expected = []
        expect(component.vm.$data.slideRange).toEqual(expected)
      })

      it('should accept a strings', () => {
        const propsData = { playerId: '12345' }
        const component = shallowMount(NumSelector, { localVue, propsData })
        const newValue = [ '1', '2', '3' ]

        component.setData({ slideRange: newValue })

        expect(component.vm.$data.slideRange).toEqual(newValue)
      })
    })
  })

  describe('getters', () => {
  
    describe('getCurrentSlide', () => {
      
      it('should return correct slide', () => {
        const propsData = { playerId: '12345' }
        const component = shallowMount(NumSelector, { localVue, propsData })

        const expected = '0'
        expect(component.vm.getCurrentSlide).toEqual(expected)
      })
    })
  })
})
