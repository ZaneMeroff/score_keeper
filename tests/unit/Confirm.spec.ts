import { shallowMount } from '@vue/test-utils'
import Confirm from '@/components/modals/Confirm.vue'

describe('Confirm', () => {

  describe("snapshots", () => {

    it("should render with default html", () => {
      const component = shallowMount(Confirm)

      expect(component.element).toMatchSnapshot()
    })

    it("should render with dialog", () => {
      const propsData = { 
        onYes: () => console.log('onYes'),
        onNo: () => console.log('onNo'),
        showModal: true,
        text: 'sample text'
      }
      const component = shallowMount(Confirm, { propsData })

      expect(component.element).toMatchSnapshot()
    })
  })
})