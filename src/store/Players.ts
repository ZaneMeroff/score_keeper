// Vue & Decorators
import Vue from 'vue'
import { Action, Module, Mutation, VuexModule } from 'vuex-class-modules'

// Utils
import { v4 as uuidv4 } from 'uuid'

// Types
import { PlayerData } from '@/types/players'

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
    createPlayers(num: number) {
      if (Math.sign(num) === 1) {
        for (let i = 1; i <= num; i++) {
          const id = uuidv4()
          const player = {
            id: id,
            name: `Player ${Object.keys(this.playerData).length + 1}`,
            score: 0,
          }
          Vue.set(this.playerData, id, player)
        }
      }
    }

    @Action
    action_createPlayers(num: number) {
      this.createPlayers(num)
    }

    // ------------------------------------------
    //            delete target player
    // ------------------------------------------

    @Mutation
    deletePlayer(id: string) {
      Vue.delete(this.playerData, id)
    }

    @Action
    action_deletePlayer(id: string) {
      this.deletePlayer(id)
    }

    // ------------------------------------------
    //            delete all players
    // ------------------------------------------

    @Mutation
    deleteAllPlayers() {
      for (const player in this.playerData) {
        Vue.delete(this.playerData, player)
      }
    }

    @Action
    action_deleteAllPlayers() {
      this.deleteAllPlayers()
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