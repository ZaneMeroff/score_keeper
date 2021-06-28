// Decorators
import Vue from 'vue'
import { Action, Module, Mutation, VuexModule } from 'vuex-class-modules'

@Module
export default class Settings extends VuexModule {

  darkMode: boolean = true
  minScore: number = 0
  maxScore: number = 10
  showScoreLimitsModal: boolean = false
  numSelectorRangeSlides: string[] = []
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

  get getNumSelectorRangeSlides() {
    return this.numSelectorRangeSlides
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
    this.action_setNumSelectorRangeSlides()
  }

  // ------------------------------------------
  //        score limit modal visibility
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
  //      set score slides for NumSelector
  // ------------------------------------------
  
  @Mutation
  setNumSelectorRangeSlides() {
    // clear existing slides array
    this.numSelectorRangeSlides.splice(0)
    // create new slides based on min/max limits
    for (let i = this.minScore; i <= this.maxScore; i++) {
      this.numSelectorRangeSlides.push(i.toString())
    }
  }

  @Action
  action_setNumSelectorRangeSlides() {
    this.setNumSelectorRangeSlides()
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