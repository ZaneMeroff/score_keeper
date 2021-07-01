import { createLocalVue, shallowMount } from '@vue/test-utils'
import AddPlayers from '@/components/modals/AddPlayers.vue'
import Vuex from 'vuex'
import Quasar, * as All from 'quasar'

import { store } from '@/store/index'
import Vue, { ComponentOptions, VueConstructor } from 'vue';

// --------- Vuex setup ------------

const localVue = createLocalVue()
localVue.use(Vuex, Quasar, {components: All, directives: All, plugins: All})

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
      
      it('should call the correct functions if validateRules returns true', () => {
        // ************************************************
        // ************************************************
        // ***************  incomplete  *******************
        // ************************************************
        // ************************************************
        // ************************************************
      })

      it('should set showError to true if validateRules returns false', () => {
        // ************************************************
        // ************************************************
        // ***************  incomplete  *******************
        // ************************************************
        // ************************************************
        // ************************************************
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

      it.only('should call action_addPlayersModalVisibility(false)', () => {
        const propsData = { showModal: true }
        const component = shallowMount(AddPlayers, { localVue, propsData })
        component.vm.handleCancelBtn()
        // ************************************************
        // ************************************************
        // ***************  incomplete  *******************
        // ************************************************
        // ************************************************
        // ************************************************
      })
    })

    describe('validateRules', () => {
      
      it('should return false if total players is > 50', () => {
        const propsData = { showModal: true }
        const component = shallowMount(AddPlayers, { localVue, propsData })

        component.setData({ numOfPlayers: 51 })
        expect(component.vm.$data.numOfPlayers).toEqual(51)
        expect(component.vm.validateRules()).toEqual(false)
      })

      it('should return true if total players is <= 50', () => {
        const propsData = { showModal: true }
        const component = shallowMount(AddPlayers, { localVue, propsData })

        component.setData({ numOfPlayers: 49 })
        expect(component.vm.$data.numOfPlayers).toEqual(49)
        expect(component.vm.validateRules()).toEqual(true)
      })
    })

    describe('onInputChange', () => {
      
      it('should set disabled to false if numOfPlayers >= 1', () => {
        const propsData = { showModal: true }
        const component = shallowMount(AddPlayers, { localVue, propsData })

        expect(component.vm.$data.numOfPlayers).toEqual(1)
        component.vm.setDefault()
        expect(component.vm.$data.disabled).toEqual(false)
      })

      it('should set disabled to true if numOfPlayers < 1', () => {
        const propsData = { showModal: true }
        const component = shallowMount(AddPlayers, { localVue, propsData })

        component.setData({ numOfPlayers: -1 })
        expect(component.vm.$data.numOfPlayers).toEqual(-1)
        component.vm.onInputChange()
        expect(component.vm.$data.disabled).toEqual(true)
      })
    })

    describe('setDefault', () => {
      
      it('should set numOfPlayers back to 1', () => {
        const propsData = { showModal: true }
        const component = shallowMount(AddPlayers, { localVue, propsData })
        
        component.setData({ numOfPlayers: 5 })
        expect(component.vm.$data.numOfPlayers).toEqual(5)
        component.vm.setDefault()
        expect(component.vm.$data.numOfPlayers).toEqual(1)
      })
    })
  })
})
