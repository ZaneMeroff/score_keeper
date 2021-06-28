// Decorators
import { Action, Module, Mutation, VuexModule } from 'vuex-class-modules'

@Module
export default class Modals extends VuexModule {

  showDeletePlayersConfirmModal: boolean = false
  showResetScoreConfirmModal: boolean = false
  showScoreLimitsModal: boolean = false

  get getShowDeletePlayersConfirmModal() {
    return this.showDeletePlayersConfirmModal
  }

  get getShowResetScoreConfirmModal() {
    return this.showResetScoreConfirmModal
  }

  get getShowScoreLimitsModal() {
    return this.showScoreLimitsModal
  }

  // ------------------------------------------
  //  confirm delete players modal visibility
  // ------------------------------------------
  
  @Mutation
  setDeletePlayersConfirmModalVisibility(show: boolean) {
    this.showDeletePlayersConfirmModal = show
  }

  @Action
  action_setDeletePlayersConfirmModalVisibility(show: boolean) {
    this.setDeletePlayersConfirmModalVisibility(show)
  }

  // ------------------------------------------
  //    confirm reset score modal visibility
  // ------------------------------------------
  
  @Mutation
  setResetScoreConfirmModalVisibility(show: boolean) {
    this.showResetScoreConfirmModal = show
  }

  @Action
  action_setResetScoreConfirmModalVisibility(show: boolean) {
    this.setResetScoreConfirmModalVisibility(show)
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
}