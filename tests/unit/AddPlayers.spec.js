import { createLocalVue, shallowMount } from '@vue/test-utils'
import { stateModals, statePlayers } from '@/store/index'
import AddPlayers from '@/components/modals/AddPlayers.vue'
import Quasar, * as All from 'quasar'
import uuid from 'uuid/v4'
import Vuex from 'vuex'

// --------- Vuex & Quasar setup -------------

const localVue = createLocalVue()
localVue.use(Vuex, Quasar, {components: All, directives: All, plugins: All})

// ----------------- Mocks -------------------

jest.mock('uuid/v4')
uuid.mockImplementation(() => '12345')

// -------------------------------------------

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
      
      it('should create a player if validateRules returns true', () => {
        const propsData = { showModal: true }
        const component = shallowMount(AddPlayers, { localVue, propsData })
        const testPlayer = {
          color: '#47EDA0', 
          id: '12345', 
          name: 'Player 1', 
          score: 0,
        }

        expect(statePlayers.getPlayerData).toMatchObject({})

        component.vm.handleSaveBtn()

        const expected = { '12345': testPlayer }
        expect(statePlayers.getPlayerData).toMatchObject(expected)

        // teardown
        statePlayers.action_deletePlayer('12345')
      })

      it('should call setDefault if validateRules returns true', () => {
        const propsData = { showModal: true }
        const component = shallowMount(AddPlayers, { localVue, propsData })
        const spy = jest.spyOn(component.vm, 'setDefault')

        component.vm.handleSaveBtn()

        expect(spy).toHaveBeenCalledTimes(1)
      })

      it('should set addPlayersModal to false if validateRules returns true', () => {
        const propsData = { showModal: true }
        const component = shallowMount(AddPlayers, { localVue, propsData })
        
        stateModals.action_addPlayersModalVisibility(true)
        expect(stateModals.getShowAddPlayersModal).toEqual(true)

        component.vm.handleSaveBtn()

        const expected = false
        expect(stateModals.getShowAddPlayersModal).toEqual(expected)
      })

      it('should emit close event if validateRules returns true', () => {
        const propsData = { showModal: true }
        const component = shallowMount(AddPlayers, { localVue, propsData })
        
        component.vm.handleSaveBtn()

        const expected = { 'close': [[]] }
        expect(component.emitted()).toEqual(expected)
      })

      it('should set showError=true if validateRules returns false', () => {
        const propsData = { showModal: true }
        const component = shallowMount(AddPlayers, { localVue, propsData })
        
        component.setData({ numOfPlayers: 51 })
        expect(component.vm.$data.showError).toEqual(false)
        component.vm.handleSaveBtn()

        expect(component.vm.$data.showError).toEqual(true)
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

      it('should set addPlayersModal to false', () => {
        const propsData = { showModal: true }
        const component = shallowMount(AddPlayers, { localVue, propsData })

        stateModals.action_addPlayersModalVisibility(true)
        expect(stateModals.getShowAddPlayersModal).toEqual(true)

        component.vm.handleCancelBtn()

        const expected = false
        expect(stateModals.getShowAddPlayersModal).toEqual(expected)
      })

      it('should emit close event', () => {
        const propsData = { showModal: true }
        const component = shallowMount(AddPlayers, { localVue, propsData })
        
        component.vm.handleCancelBtn()

        const expected = { 'close': [[]] }
        expect(component.emitted()).toEqual(expected)
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
