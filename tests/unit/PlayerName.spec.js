import { createLocalVue, shallowMount } from '@vue/test-utils'
import { statePlayers } from '@/store/index'
import PlayerName from '@/components/modals/PlayerName.vue'
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
      
      it('should set player name', () => {
        const propsData = { playerId: '12345', showModal: true }
        const component = shallowMount(PlayerName, { localVue, propsData })
        const expected = 'Khal Drogo'

        expect(statePlayers.getPlayerData['12345'].name).toEqual('Player 1')
        
        component.setData({ name: expected })
        component.vm.handleSaveBtn()

        expect(statePlayers.getPlayerData['12345'].name).toEqual(expected)

        // teardown
        statePlayers.action_setPlayerName({ id: '12345', name: 'Player 1' })
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

      it('should call setDefault on mount', () => {
        const propsData = { playerId: '12345', showModal: true }
        const spy = jest.spyOn(PlayerName.options.methods, 'setDefault')
        const component = shallowMount(PlayerName, { localVue, propsData })

        expect(spy).toHaveBeenCalledTimes(1)
      })
    })
  })

  describe('user interactions', () => {

    describe('events', () => {

      it.skip('should call handeSaveBtn when save btn is clicked',() => {
        const propsData = { playerId: '12345', showModal: true }
        const component = shallowMount(PlayerName, { localVue, propsData })
        const spy = jest.spyOn(component.vm, 'handleSaveBtn')

        component.find('q-btn-stub').trigger('click')

        console.log(component.find('q-btn-stub'))
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
