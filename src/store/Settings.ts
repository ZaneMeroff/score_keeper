// Decorators
import { Action, Module, Mutation, VuexModule } from 'vuex-class-modules'

@Module
export default class Settings extends VuexModule {

  darkMode: boolean = true

  get getDarkMode() {
    return this.darkMode
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