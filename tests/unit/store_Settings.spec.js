import { createLocalVue } from '@vue/test-utils'
import Settings from '@/store/Settings'
import Vuex from 'vuex'

// -------------- Vuex setup -----------------

const localVue = createLocalVue()
localVue.use(Vuex)

// -------------------------------------------

describe('Settings class', () => {

  let SettingsModule
  let store

  beforeEach(() => {
    store = new Vuex.Store({})
    SettingsModule = new Settings({ store, name: 'Settings' })
  })

  describe('state', () => {
    
    it('should set default state values on init', () => {
      expect(SettingsModule.darkMode).toEqual(true)
      expect(SettingsModule.minScore).toEqual(0)
      expect(SettingsModule.maxScore).toEqual(10)
      expect(SettingsModule.numSelectorRangeSlides).toEqual([])
    })
  })

  describe('getters', () => {

    describe('getDarkMode', () => {

      it('should return darkMode value', () => {
        expect(SettingsModule.getDarkMode).toEqual(true)
      })
    })

    describe('getDarkModeText', () => {

      it('should return color: #FFF if darkMode is true', () => {
        const expected = 'color: #FFF'

        expect(SettingsModule.getDarkMode).toEqual(true)
        expect(SettingsModule.getDarkModeText).toEqual(expected)
      })

      it('should return color: #000 if darkMode is false', () => {
        const expected = 'color: #000'
        
        SettingsModule.action_setDarkMode()
        expect(SettingsModule.getDarkMode).toEqual(false)
        expect(SettingsModule.getDarkModeText).toEqual(expected)
      })
    })
    
    describe('getMinScore', () => {

      it('should return minScore value', () => {
        const expected = 0
        expect(SettingsModule.getMinScore).toEqual(expected)
      })
    })

    describe('getMaxScore', () => {

      it('should return maxScore value', () => {
        const expected = 10
        expect(SettingsModule.getMaxScore).toEqual(expected)
      })
    })

    describe('getNumSelectorRangeSlides', () => {

      it('should return numSelectorRangeSlides value', () => {
        const expected = []
        expect(SettingsModule.getNumSelectorRangeSlides).toEqual(expected)
      })
    })
  })

  describe('actions', () => {

    describe('action_setDarkMode', () => {

      it('should set darkMode to opposite value', () => {
        const oldValue = true
        const newValue = false

        expect(SettingsModule.darkMode).toEqual(oldValue)
        SettingsModule.action_setDarkMode()
        expect(SettingsModule.darkMode).toEqual(newValue)
      })
    })

    describe('action_setScoreLimits', () => {

      it('should set minScore, maxScore, and numSelectorRangeSlides', () => {
        const oldMinScore = 0
        const newMinScore = -1

        const oldMaxScore = 10
        const newMaxScore = 11

        const oldNumSelectorRangeSlides = []
        const newNumSelectorRangeSlides = [ '-1', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11' ]

        expect(SettingsModule.minScore).toEqual(oldMinScore)
        expect(SettingsModule.maxScore).toEqual(oldMaxScore)
        expect(SettingsModule.numSelectorRangeSlides).toEqual(oldNumSelectorRangeSlides)
        
        SettingsModule.action_setScoreLimits({ min: newMinScore, max: newMaxScore })
        
        expect(SettingsModule.minScore).toEqual(newMinScore)
        expect(SettingsModule.maxScore).toEqual(newMaxScore)
        expect(SettingsModule.numSelectorRangeSlides).toEqual(newNumSelectorRangeSlides)
      })
    })

    describe('action_setNumSelectorRangeSlides', () => {

      it('should set numSelectorRangeSlides', () => {
        const oldValue = []
        const newValue = [ '-3', '-2', '-1', '0', '1', '2', '3' ]

        expect(SettingsModule.numSelectorRangeSlides).toEqual(oldValue)
        SettingsModule.action_setScoreLimits({ min: -3, max: 3 })
        expect(SettingsModule.numSelectorRangeSlides).toEqual(newValue)
      })
    })
  })
})
