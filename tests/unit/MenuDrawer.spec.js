import { createLocalVue, shallowMount } from '@vue/test-utils'
import MenuDrawer from '@/components/MenuDrawer.vue'
import Quasar, * as All from 'quasar'
import Vuex from 'vuex'
import localforage from 'localforage'

// --------- Vuex & Quasar setup -------------

const localVue = createLocalVue()
localVue.use(Vuex, Quasar, {components: All, directives: All, plugins: All})

// -------------------------------------------

describe('MenuDrawer', () => {

  describe('snapshots', () => {

    it('should render with default html', () => {
      const component = shallowMount(MenuDrawer, { localVue })
      
      expect(component.element).toMatchSnapshot()
    })
  })

  describe('data', () => {

    describe('drawer', () => {

      it('should have a default value of false', () => {
        const component = shallowMount(MenuDrawer, { localVue })
        
        expect(component.vm.$data.drawer).toEqual(false)
      })

      it('should accept a boolean', () => {
        const component = shallowMount(MenuDrawer, { localVue })
        const newValue = true

        component.setData({ drawer: newValue })

        expect(component.vm.$data.drawer).toEqual(newValue)
      })
    })

    describe('menuList', () => {

      it('should have a 6 menuItems', () => {
        const component = shallowMount(MenuDrawer, { localVue })
        
        expect(component.vm.$data.menuList.length).toEqual(6)
      })
    })
  })

  describe('methods', () => {

    describe('handleClearData', () => {

      it('should call localforage.clear()', () => {
        const component = shallowMount(MenuDrawer, { localVue })
        const spy = jest.spyOn(localforage, 'clear').mockImplementation(() => {})

        component.vm.handleClearData()
        
        expect(spy).toHaveBeenCalledTimes(1)
      })
    })
  })
})
