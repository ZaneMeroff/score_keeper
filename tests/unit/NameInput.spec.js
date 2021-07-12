import { createLocalVue, shallowMount } from '@vue/test-utils'
import { statePlayers } from '@/store/index'
import NameInput from '@/components/NameInput.vue'
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

describe('NameInput', () => {

  describe('snapshots', () => {

    it('should render with default html', () => {
      const propsData = { playerId: '12345' }
      const component = shallowMount(NameInput, { localVue, propsData })
      
      expect(component.element).toMatchSnapshot()
    })
  })

  describe('props', () => {

    describe('playerId', () => {

      it('should accept a string', () => {
        const propsData = { playerId: '12345' }
        const component = shallowMount(NameInput, { localVue, propsData })
        
        expect(component.vm.$props.playerId).toEqual(propsData.playerId)
      })
    })
  })

  describe('data', () => {

    describe('showDeleteModal', () => {

      it('should have a default value of false', () => {
        const propsData = { playerId: '12345' }
        const component = shallowMount(NameInput, { localVue, propsData })
        
        expect(component.vm.$data.showDeleteModal).toEqual(false)
      })

      it('should accept a boolean', () => {
        const propsData = { playerId: '12345' }
        const component = shallowMount(NameInput, { localVue, propsData })
        const newValue = true

        component.setData({ showDeleteModal: newValue })

        expect(component.vm.$data.showDeleteModal).toEqual(newValue)
      })
    })

    describe('showNameModal', () => {

      it('should have a default value of false', () => {
         const propsData = { playerId: '12345' }
         const component = shallowMount(NameInput, { localVue, propsData })
         
         expect(component.vm.$data.showNameModal).toEqual(false)
       })
 
       it('should accept a boolean', () => {
         const propsData = { playerId: '12345' }
         const component = shallowMount(NameInput, { localVue, propsData })
         const newValue = true
 
         component.setData({ showNameModal: newValue })
 
         expect(component.vm.$data.showNameModal).toEqual(newValue)
       })
    })
  })

  describe('getters', () => {
  
    describe('getName', () => {
      
      it('should return correct name', () => {
        const propsData = { playerId: '12345' }
        const component = shallowMount(NameInput, { localVue, propsData })

        const expected = 'Player 1'
        expect(component.vm.getName).toEqual(expected)
      })
    })
  })
})
