import { createLocalVue, shallowMount } from '@vue/test-utils'
import { stateModals, statePlayers, stateSettings } from '@/store/index'
import ScoreLimits from '@/components/modals/ScoreLimits.vue'
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

describe('ScoreLimits', () => {

  describe('snapshots', () => {

    it('should render with default html', () => {
      const propsData = { showModal: true }
      const component = shallowMount(ScoreLimits, { localVue, propsData })
      
      expect(component.element).toMatchSnapshot()
    })
  })

  describe('props', () => {

    describe('showModal', () => {

      it('should accept a boolean', () => {
        const propsData = { showModal: true }
        const component = shallowMount(ScoreLimits, { localVue, propsData })
        
        expect(component.vm.$props.showModal).toEqual(propsData.showModal)
      })
    })
  })

  describe('data', () => {

    describe('scoreMin', () => {

      it('should have a default value of 0', () => {
        const propsData = { showModal: true }
        const component = shallowMount(ScoreLimits, { localVue, propsData })
        
        const expected = 0
        expect(component.vm.$data.scoreMin).toEqual(expected)
      })

      it('should accept a number', () => {
        const propsData = { showModal: true }
        const component = shallowMount(ScoreLimits, { localVue, propsData })
        const newValue = -100

        component.setData({ scoreMin: newValue })

        expect(component.vm.$data.scoreMin).toEqual(newValue)
      })
    })

    describe('scoreMax', () => {

      it('should have a default value of 0', () => {
        const propsData = { showModal: true }
        const component = shallowMount(ScoreLimits, { localVue, propsData })
        
        const expected = 0
        expect(component.vm.$data.scoreMax).toEqual(expected)
      })

      it('should accept a number', () => {
        const propsData = { showModal: true }
        const component = shallowMount(ScoreLimits, { localVue, propsData })
        const newValue = 100

        component.setData({ scoreMax: newValue })

        expect(component.vm.$data.scoreMax).toEqual(newValue)
      })
    })

    describe('showError', () => {

      it('should have a default value of false', () => {
        const propsData = { showModal: true }
        const component = shallowMount(ScoreLimits, { localVue, propsData })
        
        expect(component.vm.$data.showError).toEqual(false)
      })

      it('should accept a boolean', () => {
        const propsData = { showModal: true }
        const component = shallowMount(ScoreLimits, { localVue, propsData })
        const newValue = true

        component.setData({ showError: newValue })

        expect(component.vm.$data.showError).toEqual(newValue)
      })
    })

    describe('disabled', () => {

      it('should have a default value of false', () => {
        const propsData = { showModal: true }
        const component = shallowMount(ScoreLimits, { localVue, propsData })
        
        expect(component.vm.$data.disabled).toEqual(false)
      })

      it('should accept a boolean', () => {
        const propsData = { showModal: true }
        const component = shallowMount(ScoreLimits, { localVue, propsData })
        const newValue = true

        component.setData({ disabled: newValue })
        expect(component.vm.$data.disabled).toEqual(newValue)
      })
    })
  })

  describe('methods', () => {

    describe('handleSaveBtn', () => {

      it('should zero scores if player has score outside of new limits', () => {
        const propsData = { showModal: true }
        const component = shallowMount(ScoreLimits, { localVue, propsData })
        
        statePlayers.action_setPlayerScore({ id: '12345', score: 5 })
        expect(statePlayers.getPlayerData['12345'].score).toEqual(5)

        component.setData({ scoreMax: 2 })
        component.vm.handleSaveBtn()

        expect(statePlayers.getPlayerData['12345'].score).toEqual(0)

        // teardown
        stateSettings.action_setScoreLimits({ min: 0, max: 10 })
      })

      it('should set new score limits if validateRules returns true', () => {
        const propsData = { showModal: true }
        const component = shallowMount(ScoreLimits, { localVue, propsData })
        
        expect(stateSettings.getMinScore).toEqual(0)
        expect(stateSettings.getMaxScore).toEqual(10)

        component.setData({ scoreMin: -5, scoreMax: 5 })
        component.vm.handleSaveBtn()

        expect(stateSettings.getMinScore).toEqual(-5)
        expect(stateSettings.getMaxScore).toEqual(5)

        // teardown
        stateSettings.action_setScoreLimits({ min: 0, max: 10 })
      })

      it('should set scoreLimitsModal to false if validateRules returns true', () => {
        const propsData = { showModal: true }
        const component = shallowMount(ScoreLimits, { localVue, propsData })
        
        stateModals.action_scoreLimitModalVisibility(true)
        expect(stateModals.getShowScoreLimitsModal).toEqual(true)

        component.vm.handleSaveBtn()

        expect(stateModals.getShowScoreLimitsModal).toEqual(false)
      })

      it('should emit close event if validateRules return true', () => {
        const propsData = { showModal: true }
        const component = shallowMount(ScoreLimits, { localVue, propsData })
        
        component.setData({ scoreMin: 0 })
        component.setData({ scoreMax: 10 })
        component.vm.handleSaveBtn()

        const expected = { 'close': [[]] }
        expect(component.emitted()).toEqual(expected)
      })

      it('should set showError=true if validateRuels returns false', () => {
        const propsData = { showModal: true }
        const component = shallowMount(ScoreLimits, { localVue, propsData })
        
        component.vm.handleSaveBtn()

        expect(component.vm.validateRules()).toEqual(false)
        expect(component.vm.$data.showError).toEqual(true)
      })
    })

    describe('handleCancelBtn', () => {
      
      it('should call setDefaults', () => {
        const propsData = { showModal: true }
        const component = shallowMount(ScoreLimits, { localVue, propsData })
        const spy = jest.spyOn(component.vm, 'setDefaults')

        component.vm.handleCancelBtn()

        expect(spy).toHaveBeenCalledTimes(1)
      })

      it('should set scoreLimitsModal to false', () => {
        const propsData = { showModal: true }
        const component = shallowMount(ScoreLimits, { localVue, propsData })
        
        stateModals.action_scoreLimitModalVisibility(true)
        expect(stateModals.getShowScoreLimitsModal).toEqual(true)

        component.vm.handleCancelBtn()

        expect(stateModals.getShowScoreLimitsModal).toEqual(false)
      })

      it('should emit close event', () => {
        const propsData = { showModal: true }
        const component = shallowMount(ScoreLimits, { localVue, propsData })
        
        component.vm.handleCancelBtn()

        const expected = { 'close': [[]] }
        expect(component.emitted()).toEqual(expected)
      })
    })

    describe('onInputChange', () => {
      
      it('should set disabled to true if scoreMin is empty', () => {
        const propsData = { showModal: true }
        const component = shallowMount(ScoreLimits, { localVue, propsData })

        component.setData({ scoreMin: '' })
        component.vm.onInputChange()

        expect(component.vm.$data.disabled).toEqual(true)
      })

      it('should set disabled to true if scoreMax is empty', () => {
        const propsData = { showModal: true }
        const component = shallowMount(ScoreLimits, { localVue, propsData })

        component.setData({ scoreMax: '' })
        component.vm.onInputChange()

        expect(component.vm.$data.disabled).toEqual(true)
      })

      it('should set disabled to false if scoreMin & scoreMax have values', () => {
        const propsData = { showModal: true }
        const component = shallowMount(ScoreLimits, { localVue, propsData })

        component.setData({ scoreMin: -100 })
        component.setData({ scoreMax: 100 })
        component.vm.onInputChange()

        expect(component.vm.$data.disabled).toEqual(false)
      })
    })

    describe('setDefaults', () => {
      
      it('should set scoreMin & scoreMax', () => {
        const propsData = { showModal: true }
        const component = shallowMount(ScoreLimits, { localVue, propsData })
        
        component.vm.setDefaults()

        const expectedScoreMin = 0
        const expectedScoreMax = 10
        expect(component.vm.$data.scoreMin).toEqual(expectedScoreMin)
        expect(component.vm.$data.scoreMax).toEqual(expectedScoreMax)
      })
    })

    describe('validateRules', () => {
      
      it('should return false if scoreMin > 0', () => {
        const propsData = { showModal: true }
        const component = shallowMount(ScoreLimits, { localVue, propsData })

        component.setData({ scoreMin: 1 })

        expect( component.vm.validateRules()).toEqual(false)
      })

      it('should return false if scoreMin < -500', () => {
        const propsData = { showModal: true }
        const component = shallowMount(ScoreLimits, { localVue, propsData })

        component.setData({ scoreMin: -501 })

        expect( component.vm.validateRules()).toEqual(false)
      })

      it('should return false if scoreMax < 1', () => {
        const propsData = { showModal: true }
        const component = shallowMount(ScoreLimits, { localVue, propsData })

        component.setData({ scoreMax: 0 })

        expect( component.vm.validateRules()).toEqual(false)
      })

      it('should return false if scoreMax > 500', () => {
        const propsData = { showModal: true }
        const component = shallowMount(ScoreLimits, { localVue, propsData })

        component.setData({ scoreMax: 501 })

        expect( component.vm.validateRules()).toEqual(false)
      })

      it('should return true if score limits are correct', () => {
        const propsData = { showModal: true }
        const component = shallowMount(ScoreLimits, { localVue, propsData })

        component.setData({ scoreMin: -100})
        component.setData({ scoreMax: 100 })

        expect( component.vm.validateRules()).toEqual(true)
      })
    })
  })

  describe('watch', () => {

    describe('showModal', () => {

      it('should call setDefaults if showModal changes', async () => {
        const propsData = { showModal: true }
        const spy = jest.spyOn(ScoreLimits.options.methods, 'setDefaults')
        const component = shallowMount(ScoreLimits, { localVue, propsData })
        
        await component.setProps({ showModal: false})

        expect(spy).toHaveBeenCalled()
      })
    })
  })
})
