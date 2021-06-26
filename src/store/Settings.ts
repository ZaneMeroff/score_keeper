// Decorators
import Vue from 'vue'
import { Action, Module, Mutation, VuexModule } from 'vuex-class-modules'

@Module
export default class Settings extends VuexModule {

  darkMode: boolean = true
  minScore: number = 0
  maxScore: number = 10

  get getDarkMode() {
    return this.darkMode
  }

  get getMinScore() {
    return this.minScore
  }

  get getMaxScore() {
    return this.maxScore
  }
  
  @Mutation
  setDarkMode() {
    this.darkMode = !this.darkMode
  }

  @Action
  toggleDarkMode() {
    this.setDarkMode()
  }
}