// Decorators
import Vue from 'vue'
import { Action, Module, Mutation, VuexModule } from 'vuex-class-modules'

@Module
export default class Settings extends VuexModule {

  darkMode: boolean = true
  minScore: number = 0
  maxScore: number = 10
  showScoreLimitsModal: boolean = false
  // showMenuDrawer: boolean = false

  get getDarkMode() {
    return this.darkMode
  }

  get getMinScore() {
    return this.minScore
  }

  get getMaxScore() {
    return this.maxScore
  }

  get getShowScoreLimitsModal() {
    return this.showScoreLimitsModal
  }

  // get getShowMenuDrawer() {
  //   return this.showMenuDrawer
  // }
  
  // ------------------------------------------
  //             toggle dark mode
  // ------------------------------------------

  @Mutation
  setDarkMode() {
    this.darkMode = !this.darkMode
  }

  @Action
  action_setDarkMode() {
    this.setDarkMode()
  }

  // ------------------------------------------
  //            set score limits
  // ------------------------------------------

  @Mutation
  setScoreLimits(payload: { min: number, max: number }) {
    this.minScore = payload.min
    this.maxScore = payload.max
  }

  @Action
  action_setScoreLimits(payload: { min: number, max: number }) {
    this.setScoreLimits(payload)
  }

  // ------------------------------------------
  //       score limit modal visibility
  // ------------------------------------------
  
  @Mutation
  setScoreLimitModalVisibility(show: boolean) {
    this.showScoreLimitsModal = show
  }

  @Action
  action_setScoreLimitModalVisibility(show: boolean) {
    this.setScoreLimitModalVisibility(show)
  }

  // ------------------------------------------
  //         menu drawer visibility
  // ------------------------------------------
  
  // @Mutation
  // setMenuDrawerlVisibility(show: boolean) {
  //   this.showMenuDrawer = show
  // }

  // @Action
  // action_setMenuDrawerlVisibility(show: boolean) {
  //   this.setMenuDrawerlVisibility(show)
  // }
}