import { shallowMount } from '@vue/test-utils'
import Main from '@/views/Main.vue'

describe('Main', () => {

  describe("snapshots", () => {

    it("should render with default html", () => {
      const component = shallowMount(Main)

      expect(component.element).toMatchSnapshot()
    })
  })
})
