import { createLocalVue, shallowMount } from '@vue/test-utils'
import { store } from "@/store/index"
import Main from '@/views/Main.vue'
import Vuex from "vuex"

// --------- Vuex setup ------------

const localVue = createLocalVue()
localVue.use(Vuex)

// ------------------------------------------

describe('Main', () => {

  describe("snapshots", () => {

    it("should render with default html", () => {
      const component = shallowMount(Main)

      expect(component.element).toMatchSnapshot()
    })

    // it("should render with a player-card", () => {
    //   const component = shallowMount(Main)

    //   // store.state.Players.action_createPlayers(1)
    //   store.state.Players.playerData = {
    //     "5abc23b2-c180-4bca-8287-a4785b7c5a9c": {
    //       id: "5abc23b2-c180-4bca-8287-a4785b7c5a9c",
    //       name: "Player 1",
    //       score: 0,
    //       color: "#ff3021"
    //     }
    //   }

    //   expect(component.element).toMatchSnapshot()
    // })
  })

  // it('test it', () => {
  //   const msg = 'new message'
  //   const wrapper = shallowMount(Main, {
  //     propsData: { msg }
  //   })
  //   expect(wrapper.text()).toMatch(msg)
  // })
})
