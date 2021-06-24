// Vue & Decorators
import Vue from 'vue'
import { Action, Module, Mutation, VuexModule } from 'vuex-class-modules'

// Types
import { Player, PlayerData } from '@/types/players'

@Module
export default class Players extends VuexModule {

    playerData: PlayerData = {}

    get getPlayerData() {
      return this.playerData
    }

    // ------------------------------------------
    //              create player
    // ------------------------------------------

    @Mutation
    createPlayer(payload: Player) {
      Vue.set(this.playerData, payload.id, payload)
    }

    @Action
    action_createPlayer(payload: Player) {
      this.createPlayer(payload)
    }

    // ------------------------------------------
    //         modify target player score
    // ------------------------------------------

    @Mutation
    setPlayerScore(payload: { id: string, score: number }) {
      this.playerData[payload.id].score = payload.score
    }

    @Action
    action_setPlayerScore(payload: { id: string, score: number }) {
      this.setPlayerScore(payload)
    }

    // ------------------------------------------
    //         modify target player name
    // ------------------------------------------

    @Mutation
    setPlayerName(payload: { id: string, name: string }) {
      this.playerData[payload.id].name = payload.name
    }

    @Action
    action_setPlayerName(payload: { id: string, name: string }) {
      this.setPlayerName(payload)
    }

    // ------------------------------------------
    //        zero scores for all players
    // ------------------------------------------

    @Mutation
    zeroScores() {
      for (const player in this.playerData) {
        this.playerData[player].score = 0
      }
    }

    @Action
    action_zeroScores() {
      this.zeroScores()
    }
}