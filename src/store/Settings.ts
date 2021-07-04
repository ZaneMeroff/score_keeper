// Decorators
import { Action, Module, Mutation, VuexModule } from 'vuex-class-modules'

@Module
export default class Settings extends VuexModule {

  darkMode: boolean = true
  minScore: number = 0
  maxScore: number = 10
  numSelectorRangeSlides: string[] = []

  get getDarkMode(): boolean {
    return this.darkMode
  }

  get getDarkModeText(): 'color: #FFF' | 'color: #000' {
    return this.darkMode ? 'color: #FFF' : 'color: #000'
  }

  get getMinScore(): number {
    return this.minScore
  }

  get getMaxScore(): number {
    return this.maxScore
  }

  get getNumSelectorRangeSlides(): string[] {
    return this.numSelectorRangeSlides
  }
  
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
}