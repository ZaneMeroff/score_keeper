import { createLocalVue, shallowMount } from '@vue/test-utils'
import { mountFactory } from '@quasar/quasar-app-extension-testing-unit-jest'
import Players from '@/store/Players'
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

// PlayersModule.action_createPlayers(1)

// -------------------------------------------

describe('PlayerName', () => {

  let PlayersModule: Players
  let store: any

  beforeEach(() => {
    store = new Vuex.Store({})
    PlayersModule = new Players({ store, name: 'Players' })
    // PlayersModule.action_createPlayers(1)

    // find out why players exist here but not before tests
    // try connecting PlayerModule to localVue
  })

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

        // console.log(PlayersModule.getPlayerData['12345'])
        // PlayersModule.action_createPlayers(1)

        const propsData = { playerId: '12345', showModal: true }
        const component = shallowMount(PlayerName, { localVue, propsData })
        
        console.log('name: ', component.vm.$data.name)

        const expected = 'Player 1'
        expect(component.vm.$data.name).toEqual(expected)
      })

      it.skip('should accept a string', () => {
        const propsData = { playerId: '12345', showModal: true }
        const component = shallowMount(PlayerName, { localVue, propsData })
        const newValue = 'New Name'

        component.setData({ name: newValue })

        expect(component.vm.$data.name).toEqual(newValue)
      })
    })

    describe('disabled', () => {

      it.skip('should have a default value of false', () => {
        const propsData = { playerId: '12345', showModal: true }
        const component = shallowMount(PlayerName, { localVue, propsData })
        
        expect(component.vm.$data.disabled).toEqual(false)
      })

      it.skip('should accept a boolean', () => {
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
      
      it.skip('should set player name', () => {
        const propsData = { playerId: '12345', showModal: true }
        const component = shallowMount(PlayerName, { localVue, propsData })
        const expected = 'Khal Drogo'

        expect(PlayersModule.getPlayerData['12345'].name).toEqual('Player 1')
        
        component.setData({ name: expected });
        (component.vm as any).handleSaveBtn()

        expect(PlayersModule.getPlayerData['12345'].name).toEqual(expected)

        // teardown
        PlayersModule.action_setPlayerName({ id: '12345', name: 'Player 1' })
      })

      it.skip('should call setDefault', () => {
        const propsData = { playerId: '12345', showModal: true }
        const component = shallowMount(PlayerName, { localVue, propsData })
        const spy = jest.spyOn((component.vm as any), 'setDefault');

        (component.vm as any).handleSaveBtn()

        expect(spy).toHaveBeenCalledTimes(1)
      })

      it.skip('should emit close event', () => {
        const propsData = { playerId: '12345', showModal: true }
        const component = shallowMount(PlayerName, { localVue, propsData })
        
        // @ts-ignore
        component.vm.handleSaveBtn()

        const expected = { 'close': [[]] }
        expect(component.emitted()).toEqual(expected)
      })
    })

    describe('handleCancelBtn', () => {
      
      it.skip('should call setDefault', () => {
        const propsData = { playerId: '12345', showModal: true }
        const component = shallowMount(PlayerName, { localVue, propsData })
        // @ts-ignore
        const spy = jest.spyOn(component.vm, 'setDefault')

        // @ts-ignore
        component.vm.handleCancelBtn()

        expect(spy).toHaveBeenCalledTimes(1)
      })

      it.skip('should emit close event', () => {
        const propsData = { playerId: '12345', showModal: true }
        const component = shallowMount(PlayerName, { localVue, propsData })
        
        // @ts-ignore
        component.vm.handleCancelBtn()

        const expected = { 'close': [[]] }
        expect(component.emitted()).toEqual(expected)
      })
    })

    describe('onInputChange', () => {
      
      it.skip('should set disabled to true if name.length=false', () => {
        const propsData = { playerId: '12345', showModal: true }
        const component = shallowMount(PlayerName, { localVue, propsData })

        component.setData({ name: '' })
        // @ts-ignore
        component.vm.onInputChange()

        expect(component.vm.$data.disabled).toEqual(true)
      })

      it.skip('should set disabled to false if name.length=true', () => {
        const propsData = { playerId: '12345', showModal: true }
        const component = shallowMount(PlayerName, { localVue, propsData })
        const newValue = 'Sample Name'

        component.setData({ name: newValue })
        // @ts-ignore
        component.vm.onInputChange()

        expect(component.vm.$data.disabled).toEqual(false)
      })
    })

    describe('setDefault', () => {
      
      it.skip('should set name correctly if player exists', () => {
        const propsData = { playerId: '12345', showModal: true }
        const component = shallowMount(PlayerName, { localVue, propsData })
        const playerName = 'Player 1'

        component.setData({ name: playerName })
        // @ts-ignore
        component.vm.setDefault()

        expect(component.vm.$data.name).toEqual(playerName)
      })
    })
  })

  describe('lifecycle methods', () => {

    describe('mounted', () => {

      it.skip('should call setDefault on mount', () => {
        const propsData = { playerId: '12345', showModal: true }
        // @ts-ignore
        const spy = jest.spyOn(PlayerName.options.methods, 'setDefault')
        const component = shallowMount(PlayerName, { localVue, propsData })

        expect(spy).toHaveBeenCalledTimes(1)
      })
    })
  })

  describe('user interactions', () => {

    describe('events', () => {

      it.skip('should call handeSaveBtn when save btn is clicked', async () => {
        // @ts-ignore
        const spy = jest.spyOn(PlayerName.options.methods as any, 'handleSaveBtn')

        // @ts-ignore
        const factory = mountFactory(PlayerName, { quasar: All, mount: { type: 'full' } })

        const wrapper = factory({ playerId: '12345', showModal: true })

        await wrapper.find('#save-btn').trigger('click')
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
