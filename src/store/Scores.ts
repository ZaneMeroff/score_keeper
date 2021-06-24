// Decorators
import { Action, Module, Mutation, VuexModule } from 'vuex-class-modules'

// Types
import { Score, ScoreData } from '@/types/scores'
import Vue from 'vue'

@Module
export default class Scores extends VuexModule {

    scoreData: ScoreData = {}

    get getScoreData() {
      return this.scoreData
    }

    @Mutation
    setScoreData(payload: { id: string, updatedScore: number }) {
      // create or update score data based on id
      Vue.set(this.scoreData, payload.id, payload.updatedScore)
    }

    
}