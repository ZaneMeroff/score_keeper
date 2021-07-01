import { createLocalVue, shallowMount } from '@vue/test-utils'
import Confirm from '@/components/modals/Confirm.vue'
import Quasar, * as All from 'quasar'

// ------------ Quasar setup ----------------

const localVue = createLocalVue()
localVue.use(Quasar, {components: All, directives: All, plugins: All})

// ------------------------------------------

describe('Confirm', () => {

  describe("snapshots", () => {

    it("should render with default html", () => {
      const propsData = {
        onYes: jest.fn(),
        onNo: jest.fn(),
        showModal: true,
        text: 'sample text'
      }
      const component = shallowMount(Confirm, { localVue, propsData })

      expect(component.element).toMatchSnapshot()
    })
  })

  describe('props', () => {

    describe('onYes', () => {
      
      it('should accept a function', () => {
        const propsData = {
          onYes: jest.fn(),
          onNo: jest.fn(),
          showModal: true,
          text: 'sample text'
        }
        const component = shallowMount(Confirm, { localVue, propsData })
  
        expect(component.vm.$props.onYes).toEqual(propsData.onYes)
      })
    })

    describe('onNo', () => {
      
      it('should accept a function', () => {
        const propsData = {
          onYes: jest.fn(),
          onNo: jest.fn(),
          showModal: true,
          text: 'sample text'
        }
        const component = shallowMount(Confirm, { localVue, propsData })
  
        expect(component.vm.$props.onNo).toEqual(propsData.onNo)
      })
    })

    describe('showModal', () => {
      
      it('should accept a boolean', () => {
        const propsData = {
          onYes: jest.fn(),
          onNo: jest.fn(),
          showModal: true,
          text: 'sample text'
        }
        const component = shallowMount(Confirm, { localVue, propsData })
  
        expect(component.vm.$props.showModal).toEqual(propsData.showModal)
      })
    })

    describe('text', () => {
      
      it('should accept a string', () => {
        const propsData = {
          onYes: jest.fn(),
          onNo: jest.fn(),
          showModal: true,
          text: 'sample text'
        }
        const component = shallowMount(Confirm, { localVue, propsData })
  
        expect(component.vm.$props.text).toEqual(propsData.text)
      })
    })
  })
})