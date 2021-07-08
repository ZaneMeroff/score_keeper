import { createLocalVue } from '@vue/test-utils'
import Modals from '@/store/Modals'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Modals class', () => {

  let ModalsModule
  let store

  beforeEach(() => {
    store = new Vuex.Store({})
    ModalsModule = new Modals({ store, name: 'Modals' })
  })

  describe('state', () => {
    
    it('should set default state values on init', () => {
      expect(ModalsModule.addPlayersModal).toBe(false)
      expect(ModalsModule.clearDataModal).toBe(false)
      expect(ModalsModule.deletePlayersModal).toBe(false)
      expect(ModalsModule.resetScoreModal).toBe(false)
      expect(ModalsModule.scoreLimitsModal).toBe(false)
    })
  })

  describe('actions', () => {

    describe('action_addPlayersModalVisibility', () => {

      it('updates state with new show value', () => {
        const newValue = true
        const oldValue = false

        expect(ModalsModule.addPlayersModal).toBe(oldValue)
        ModalsModule.action_addPlayersModalVisibility(newValue)
        expect(ModalsModule.addPlayersModal).toBe(newValue)
      })
    })

    describe('action_clearDataModalVisibility', () => {

      it('updates state with new show value', () => {
        const newValue = true
        const oldValue = false
        
        expect(ModalsModule.addPlayersModal).toBe(oldValue)
        ModalsModule.action_addPlayersModalVisibility(newValue)
        expect(ModalsModule.addPlayersModal).toBe(newValue)
      })
    })

    describe('action_deletePlayersModalVisibility', () => {

      it('updates state with new show value', () => {
        const newValue = true
        const oldValue = false
        
        expect(ModalsModule.addPlayersModal).toBe(oldValue)
        ModalsModule.action_addPlayersModalVisibility(newValue)
        expect(ModalsModule.addPlayersModal).toBe(newValue)
      })
    })

    describe('action_resetScoreModalVisibility', () => {

      it('updates state with new show value', () => {
        const newValue = true
        const oldValue = false
        
        expect(ModalsModule.addPlayersModal).toBe(oldValue)
        ModalsModule.action_addPlayersModalVisibility(newValue)
        expect(ModalsModule.addPlayersModal).toBe(newValue)
      })
    })

    describe('action_scoreLimitModalVisibility', () => {

      it('updates state with new show value', () => {
        const newValue = true
        const oldValue = false
        
        expect(ModalsModule.addPlayersModal).toBe(oldValue)
        ModalsModule.action_addPlayersModalVisibility(newValue)
        expect(ModalsModule.addPlayersModal).toBe(newValue)
      })
    })
  })
})
