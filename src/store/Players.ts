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

    @Mutation
    setPlayerData(payload: { id: string, score: number, name?: string }) {
      // create or update score data based on id
      Vue.set(this.playerData, payload.id, payload)
    }

    @Action
    action_setPlayerData(payload: { id: string, score: number, name?: string }) {
      this.setPlayerData(payload)
    }
}