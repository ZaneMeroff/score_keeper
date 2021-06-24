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
}