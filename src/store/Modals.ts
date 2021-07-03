// Decorators
import { Action, Module, Mutation, VuexModule } from 'vuex-class-modules'

@Module
export default class Modals extends VuexModule {

  addPlayersModal: boolean = false
  clearDataModal: boolean = false
  deletePlayersModal: boolean = false
  resetScoreModal: boolean = false
  scoreLimitsModal: boolean = false

  get getShowAddPlayersModal(): boolean {
    return this.addPlayersModal
  }

  get getShowClearDataModal(): boolean {
    return this.clearDataModal
  }

  get getShowDeletePlayersModal(): boolean {
    return this.deletePlayersModal
  }

  get getShowResetScoreModal(): boolean {
    return this.resetScoreModal
  }

  get getShowScoreLimitsModal(): boolean {
    return this.scoreLimitsModal
  }

  // ------------------------------------------
  //       add players modal visibility
  // ------------------------------------------
  
  @Mutation
  addPlayersModalVisibility(show: boolean) {
    this.addPlayersModal = show
  }
  
  @Action
  action_addPlayersModalVisibility(show: boolean) {
    this.addPlayersModalVisibility(show)
  }

  // ------------------------------------------
  //        clear data modal visibility
  // ------------------------------------------
  
  @Mutation
  clearDataModalVisibility(show: boolean) {
    this.clearDataModal = show
  }
  
  @Action
  action_clearDataModalVisibility(show: boolean) {
    this.clearDataModalVisibility(show)
  }

  // ------------------------------------------
  //  confirm delete players modal visibility
  // ------------------------------------------
  
  @Mutation
  deletePlayersModalVisibility(show: boolean) {
    this.deletePlayersModal = show
  }

  @Action
  action_deletePlayersModalVisibility(show: boolean) {
    this.deletePlayersModalVisibility(show)
  }

  // ------------------------------------------
  //    confirm reset score modal visibility
  // ------------------------------------------
  
  @Mutation
  resetScoreModalVisibility(show: boolean) {
    this.resetScoreModal = show
  }

  @Action
  action_resetScoreModalVisibility(show: boolean) {
    this.resetScoreModalVisibility(show)
  }

  // ------------------------------------------
  //        score limit modal visibility
  // ------------------------------------------
  
  @Mutation
  scoreLimitModalVisibility(show: boolean) {
    this.scoreLimitsModal = show
  }

  @Action
  action_scoreLimitModalVisibility(show: boolean) {
    this.scoreLimitModalVisibility(show)
  }
}