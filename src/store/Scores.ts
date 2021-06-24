// Decorators
import { Action, Module, Mutation, VuexModule } from 'vuex-class-modules'

// Types
import { Score, ScoreData } from '@/types/scores'

@Module
export default class Scores extends VuexModule {

    scoreData: ScoreData = {}

    


}