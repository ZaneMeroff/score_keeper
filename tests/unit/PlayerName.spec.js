import { createLocalVue, shallowMount } from '@vue/test-utils'
import { statePlayers } from '@/store/index'
import PlayerName from '@/components/modals/PlayerName.vue'
import Quasar, * as All from 'quasar'
import uuid from 'uuid/v4'
import Vuex from 'vuex'

// --------- Vuex & Quasar setup -------------

const localVue = createLocalVue()
localVue.use(Vuex, Quasar, {components: All, directives: All, plugins: All})

// --------------- Mocks ---------------------

jest.mock('uuid/v4')
uuid.mockImplementation(() => '12345')

// --------------- Setup ---------------------

statePlayers.action_createPlayers(1)

// -------------------------------------------

describe('PlayerName', () => {

  describe('snapshots', () => {

    it('should render with default html', () => {
      const propsData = { playerId: '12345', showModal: true }
      const component = shallowMount(PlayerName, { localVue, propsData })
      
      expect(component.element).toMatchSnapshot()
    })
  })

  describe('props', () => {

    describe('showModal', () => {

      it('should accept a boolean', () => {
        const propsData = { playerId: '12345', showModal: true }
        const component = shallowMount(PlayerName, { localVue, propsData })
        
        expect(component.vm.$props.showModal).toEqual(propsData.showModal)
      })
    })

    describe('playerId', () => {

      it('should accept a string', () => {
        const propsData = { playerId: '12345', showModal: true }
        const component = shallowMount(PlayerName, { localVue, propsData })
        
        expect(component.vm.$props.playerId).toEqual(propsData.playerId)
      })
    })
  })

  describe('data', () => {

    describe('name', () => {

      it('should have a default value of empty string', () => {
        const propsData = { playerId: '12345', showModal: true }
        const component = shallowMount(PlayerName, { localVue, propsData })
        
        const expected = 'Player 1'
        expect(component.vm.$data.name).toEqual(expected)
      })

      it('should accept a string', () => {
        const propsData = { playerId: '12345', showModal: true }
        const component = shallowMount(PlayerName, { localVue, propsData })
        const newValue = 'New Name'

        component.setData({ name: newValue })
        expect(component.vm.$data.name).toEqual(newValue)
      })
    })

    describe('disabled', () => {

      it('should have a default value of false', () => {
        const propsData = { playerId: '12345', showModal: true }
        const component = shallowMount(PlayerName, { localVue, propsData })
        
        expect(component.vm.$data.disabled).toEqual(false)
      })

      it('should accept a boolean', () => {
        const propsData = { playerId: '12345', showModal: true }
        const component = shallowMount(PlayerName, { localVue, propsData })
        const newValue = true

        component.setData({ disabled: newValue })

        expect(component.vm.$data.disabled).toEqual(newValue)
      })
    })
  })

  describe('methods', () => {

    describe('handleSaveBtn', () => {
      
      it.skip('should call statePlayers.action_setPlayerName', () => {
        // ************************************************
        // ************************************************
        // ***************  incomplete  *******************
        // ************************************************
        // ************************************************
      })

      it('should call setDefault', () => {
        const propsData = { playerId: '12345', showModal: true }
        const component = shallowMount(PlayerName, { localVue, propsData })
        const spy = jest.spyOn(component.vm, 'setDefault')

        component.vm.handleSaveBtn()
        expect(spy).toHaveBeenCalledTimes(1)
      })

      it('should emit close event', () => {
        const propsData = { playerId: '12345', showModal: true }
        const component = shallowMount(PlayerName, { localVue, propsData })
        
        component.vm.handleSaveBtn()
        const expected = { 'close': [[]] }
        expect(component.emitted()).toEqual(expected)
      })
    })

    describe('handleCancelBtn', () => {
      
      it('should call setDefault', () => {
        const propsData = { playerId: '12345', showModal: true }
        const component = shallowMount(PlayerName, { localVue, propsData })
        const spy = jest.spyOn(component.vm, 'setDefault')

        component.vm.handleCancelBtn()
        expect(spy).toHaveBeenCalledTimes(1)
      })

      it('should emit close event', () => {
        const propsData = { playerId: '12345', showModal: true }
        const component = shallowMount(PlayerName, { localVue, propsData })
        
        component.vm.handleCancelBtn()
        const expected = { 'close': [[]] }
        expect(component.emitted()).toEqual(expected)
      })
    })

    describe('onInputChange', () => {
      
      it('should set disabled to true if name.length=false', () => {
        const propsData = { playerId: '12345', showModal: true }
        const component = shallowMount(PlayerName, { localVue, propsData })

        component.setData({ name: '' })
        component.vm.onInputChange()
        expect(component.vm.$data.disabled).toEqual(true)
      })

      it('should set disabled to false if name.length=true', () => {
        const propsData = { playerId: '12345', showModal: true }
        const component = shallowMount(PlayerName, { localVue, propsData })
        const newValue = 'Sample Name'

        component.setData({ name: newValue })
        component.vm.onInputChange()
        expect(component.vm.$data.disabled).toEqual(false)
      })
    })

    describe('setDefault', () => {
      
      it('should set name correctly', () => {
        const propsData = { playerId: '12345', showModal: true }
        const component = shallowMount(PlayerName, { localVue, propsData })
        
        component.vm.setDefault()
        const expected = 'Player 1'
        expect(component.vm.$data.name).toEqual(expected)
      })
    })
  })

  describe('lifecycle methods', () => {

    describe('mounted', () => {

      it.skip('should call setDefault on mount', () => {
        const propsData = { playerId: '12345', showModal: true }
        const component = shallowMount(PlayerName, { localVue, propsData })
        const spy = jest.spyOn(component.vm, 'setDefault')
        // ************************************************
        // ************************************************
        // ***************  incomplete  *******************
        // ************************************************
        // ************************************************
        expect(spy).toHaveBeenCalledTimes(1)
      })
    })
  })
})
