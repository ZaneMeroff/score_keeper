import { shallowMount } from '@vue/test-utils'
import Main from '@/views/Main.vue'

describe('test describe', () => {

  it('test it', () => {
    const wrapper = shallowMount(Main)


    expect(true).toEqual(true)
  })

  // it('test it', () => {
  //   const msg = 'new message'
  //   const wrapper = shallowMount(Main, {
  //     propsData: { msg }
  //   })
  //   expect(wrapper.text()).toMatch(msg)
  // })
})
