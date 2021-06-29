// Decorators
import { Action, Module, Mutation, VuexModule } from 'vuex-class-modules'

@Module
export default class Modals extends VuexModule {

  addPlayersModal: boolean = false
  deletePlayersModal: boolean = false
  resetScoreModal: boolean = false
  scoreLimitsModal: boolean = false

  get getShowAddPlayersModal() {
    return this.addPlayersModal
  }

  get getShowDeletePlayersModal() {
    return this.deletePlayersModal
  }

  get getShowResetScoreModal() {
    return this.resetScoreModal
  }

  get getShowScoreLimitsModal() {
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