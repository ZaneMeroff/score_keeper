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
    currentColorIndex: number = 0
    colors: string[] = [
      '#FFAE5F', // orange
      '#47EDA0', // green
      '#AE7FF8', // purple
      '#E3ED47', // yellow
      '#38C6D0', // blue
      '#FFA48E', // peach
      '#E55AC7', // pink
    ]

    get getPlayerData() {
      return this.playerData
    }

    // ------------------------------------------
    //              create player
    // ------------------------------------------

    @Mutation
    createPlayers(num: number) {
      // only accept numbers that are non-zero and positive
      if (Math.sign(num) === 1) {
        for (let i = 1; i <= num; i++) {
          // reset currentColorIndex if it's on the last item in color array
          if (this.currentColorIndex >= this.colors.length) this.currentColorIndex = 0
          const id = uuidv4()
          const player = {
            id: id,
            name: `Player ${Object.keys(this.playerData).length + 1}`,
            score: 0,
            color: this.colors[this.currentColorIndex]
          }
          // increment color index
          this.currentColorIndex++
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