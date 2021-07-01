import { createLocalVue, shallowMount } from '@vue/test-utils'
import AddPlayers from '@/components/modals/AddPlayers.vue'
import Vuex from 'vuex'
import Quasar, * as All from 'quasar'

import { store } from '@/store/index'
import Vue, { ComponentOptions, VueConstructor } from 'vue';

// --------- Vuex setup ------------

const localVue = createLocalVue()
localVue.use(Vuex, Quasar, {components: All, directives: All, plugins: All})
// const state = {
//   fakeState: 'testString'
// }
// const vuexStore = new Vuex.Store(store)

// ---------------------------------

describe('AddPlayers', () => {

  describe('snapshots', () => {

    it('should render with default html', () => {
      const component = shallowMount(AddPlayers, { localVue })
      
      expect(component.element).toMatchSnapshot()
    })
  })

  describe('props', () => {

    describe('showModal', () => {

      it('should accept a boolean', () => {
        const propsData = { showModal: true }
        const component = shallowMount(AddPlayers, { localVue, propsData })
        
        expect(component.vm.$props.showModal).toEqual(propsData.showModal)
      })
    })
  })

  describe('data', () => {

    describe('disabled', () => {

      it('should have a default value of false', () => {
        const propsData = { showModal: true }
        const component = shallowMount(AddPlayers, { localVue, propsData })
        
        expect(component.vm.$data.disabled).toEqual(false)
      })

      it('should accept a boolean', () => {
        const propsData = { showModal: true }
        const component = shallowMount(AddPlayers, { localVue, propsData })
        const newValue = true

        component.setData({ disabled: newValue })

        expect(component.vm.$data.disabled).toEqual(newValue)
      })
    })

    describe('numOfPlayers', () => {

      it('should have a default value of 1', () => {
        const propsData = { showModal: true }
        const component = shallowMount(AddPlayers, { localVue, propsData })
        
        expect(component.vm.$data.numOfPlayers).toEqual(1)
      })

      it('should accept a number', () => {
        const propsData = { showModal: true }
        const component = shallowMount(AddPlayers, { localVue, propsData })
        const newValue = 5

        component.setData({ numOfPlayers: newValue })

        expect(component.vm.$data.numOfPlayers).toEqual(newValue)
      })
    })

    describe('showError', () => {

      it('should have a default value of false', () => {
        const propsData = { showModal: true }
        const component = shallowMount(AddPlayers, { localVue, propsData })
        
        expect(component.vm.$data.showError).toEqual(false)
      })

      it('should accept a boolean', () => {
        const propsData = { showModal: true }
        const component = shallowMount(AddPlayers, { localVue, propsData })
        const newValue = true

        component.setData({ showError: newValue })

        expect(component.vm.$data.showError).toEqual(newValue)
      })
    })
  })

  describe('methods', () => {
  
    describe('handleSaveBtn', () => {
      
      it('should...', () => {

      })
    })

    describe('handleCancelBtn', () => {
      
      it('should call setDefault', () => {
        const propsData = { showModal: true }
        const component = shallowMount(AddPlayers, { localVue, propsData })
        const spy = jest.spyOn(component.vm, 'setDefault')

        component.vm.handleCancelBtn()

        expect(spy).toHaveBeenCalledTimes(1)
      })

      it('should call action_addPlayersModalVisibility(false)', () => {

      })
    })

    describe('validateRules', () => {
      
      it('should...', () => {

      })
    })

    describe('onInputChange', () => {
      
      it('should...', () => {

      })
    })

    describe('setDefault', () => {
      
      it('should...', () => {

      })
    })
  })
})
