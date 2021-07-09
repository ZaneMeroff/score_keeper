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

  describe('getters', () => {

    describe('getShowAddPlayersModal', () => {

      it('should return addPlayersModal value', () => {
        expect(ModalsModule.getShowAddPlayersModal).toEqual(false)
      })
    })

    describe('getShowClearDataModal', () => {

      it('should return clearDataModal value', () => {
        expect(ModalsModule.getShowClearDataModal).toEqual(false)
      })
    })

    describe('getShowDeletePlayersModal', () => {

      it('should return deletePlayersModal value', () => {
        expect(ModalsModule.getShowDeletePlayersModal).toEqual(false)
      })
    })

    describe('getShowResetScoreModal', () => {

      it('should return resetScoreModal value', () => {
        expect(ModalsModule.getShowResetScoreModal).toEqual(false)
      })
    })

    describe('getShowScoreLimitsModal', () => {

      it('should return scoreLimitsModal value', () => {
        expect(ModalsModule.getShowScoreLimitsModal).toEqual(false)
      })
    })
  })

  describe('actions', () => {

    describe('action_addPlayersModalVisibility', () => {

      it('should update state with new show value', () => {
        const newValue = true
        const oldValue = false

        expect(ModalsModule.addPlayersModal).toBe(oldValue)
        ModalsModule.action_addPlayersModalVisibility(newValue)
        expect(ModalsModule.addPlayersModal).toBe(newValue)
      })
    })

    describe('action_clearDataModalVisibility', () => {

      it('should update state with new show value', () => {
        const newValue = true
        const oldValue = false
        
        expect(ModalsModule.clearDataModal).toBe(oldValue)
        ModalsModule.action_clearDataModalVisibility(newValue)
        expect(ModalsModule.clearDataModal).toBe(newValue)
      })
    })

    describe('action_deletePlayersModalVisibility', () => {

      it('should update state with new show value', () => {
        const newValue = true
        const oldValue = false
        
        expect(ModalsModule.deletePlayersModal).toBe(oldValue)
        ModalsModule.action_deletePlayersModalVisibility(newValue)
        expect(ModalsModule.deletePlayersModal).toBe(newValue)
      })
    })

    describe('action_resetScoreModalVisibility', () => {

      it('should update state with new show value', () => {
        const newValue = true
        const oldValue = false
        
        expect(ModalsModule.resetScoreModal).toBe(oldValue)
        ModalsModule.action_resetScoreModalVisibility(newValue)
        expect(ModalsModule.resetScoreModal).toBe(newValue)
      })
    })

    describe('action_scoreLimitModalVisibility', () => {

      it('should update state with new show value', () => {
        const newValue = true
        const oldValue = false
        
        expect(ModalsModule.scoreLimitsModal).toBe(oldValue)
        ModalsModule.action_scoreLimitModalVisibility(newValue)
        expect(ModalsModule.scoreLimitsModal).toBe(newValue)
      })
    })
  })
})
