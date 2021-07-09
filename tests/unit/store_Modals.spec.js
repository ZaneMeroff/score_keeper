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
      expect(ModalsModule.addPlayersModal).toEqual(false)
      expect(ModalsModule.clearDataModal).toEqual(false)
      expect(ModalsModule.deletePlayersModal).toEqual(false)
      expect(ModalsModule.resetScoreModal).toEqual(false)
      expect(ModalsModule.scoreLimitsModal).toEqual(false)
    })
  })

  describe('getters', () => {

    describe('getShowAddPlayersModal', () => {

      it('should return addPlayersModal value', () => {
        const expected = false
        expect(ModalsModule.getShowAddPlayersModal).toEqual(expected)
      })
    })

    describe('getShowClearDataModal', () => {

      it('should return clearDataModal value', () => {
        const expected = false
        expect(ModalsModule.getShowClearDataModal).toEqual(expected)
      })
    })

    describe('getShowDeletePlayersModal', () => {

      it('should return deletePlayersModal value', () => {
        const expected = false
        expect(ModalsModule.getShowDeletePlayersModal).toEqual(expected)
      })
    })

    describe('getShowResetScoreModal', () => {

      it('should return resetScoreModal value', () => {
        const expected = false
        expect(ModalsModule.getShowResetScoreModal).toEqual(expected)
      })
    })

    describe('getShowScoreLimitsModal', () => {

      it('should return scoreLimitsModal value', () => {
        const expected = false
        expect(ModalsModule.getShowScoreLimitsModal).toEqual(expected)
      })
    })
  })

  describe('actions', () => {

    describe('action_addPlayersModalVisibility', () => {

      it('should update state with new show value', () => {
        const newValue = true
        const oldValue = false

        expect(ModalsModule.addPlayersModal).toEqual(oldValue)
        ModalsModule.action_addPlayersModalVisibility(newValue)
        expect(ModalsModule.addPlayersModal).toEqual(newValue)
      })
    })

    describe('action_clearDataModalVisibility', () => {

      it('should update state with new show value', () => {
        const newValue = true
        const oldValue = false
        
        expect(ModalsModule.clearDataModal).toEqual(oldValue)
        ModalsModule.action_clearDataModalVisibility(newValue)
        expect(ModalsModule.clearDataModal).toEqual(newValue)
      })
    })

    describe('action_deletePlayersModalVisibility', () => {

      it('should update state with new show value', () => {
        const newValue = true
        const oldValue = false
        
        expect(ModalsModule.deletePlayersModal).toEqual(oldValue)
        ModalsModule.action_deletePlayersModalVisibility(newValue)
        expect(ModalsModule.deletePlayersModal).toEqual(newValue)
      })
    })

    describe('action_resetScoreModalVisibility', () => {

      it('should update state with new show value', () => {
        const newValue = true
        const oldValue = false
        
        expect(ModalsModule.resetScoreModal).toEqual(oldValue)
        ModalsModule.action_resetScoreModalVisibility(newValue)
        expect(ModalsModule.resetScoreModal).toEqual(newValue)
      })
    })

    describe('action_scoreLimitModalVisibility', () => {

      it('should update state with new show value', () => {
        const newValue = true
        const oldValue = false
        
        expect(ModalsModule.scoreLimitsModal).toEqual(oldValue)
        ModalsModule.action_scoreLimitModalVisibility(newValue)
        expect(ModalsModule.scoreLimitsModal).toEqual(newValue)
      })
    })
  })
})
