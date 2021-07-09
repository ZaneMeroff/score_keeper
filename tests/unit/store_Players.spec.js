import { createLocalVue } from '@vue/test-utils'
import Players from '@/store/Players'
import uuid from 'uuid/v4'
import Vuex from 'vuex'

// -------------- mocks ------------------

jest.mock('uuid/v4')
uuid.mockImplementation(() => '12345')

// -------------- setup ------------------

const localVue = createLocalVue()
localVue.use(Vuex)

// ---------------------------------------

describe('Players class', () => {

  let PlayersModule
  let store

  const testColors = [
    '#47EDA0', // green
    '#AE7FF8', // purple
    '#E3ED47', // yellow
    '#38C6D0', // blue
    '#FFA48E', // peach
    '#E55AC7', // pink
    '#FFAE5F', // orange
  ]

  const testPlayer = {
    color: '#47EDA0', 
    id: '12345', 
    name: 'Player 1', 
    score: 0,
  }

  beforeEach(() => {
    store = new Vuex.Store({})
    PlayersModule = new Players({ store, name: 'Players' })
  })

  describe('state', () => {
    
    it('should set default state values on init', () => {
      expect(PlayersModule.playerData).toMatchObject({})
      expect(PlayersModule.currentColorIndex).toEqual(0)
      expect(PlayersModule.colors).toEqual(testColors)
    })
  })

  describe('getters', () => {

    describe('getPlayerData', () => {

      it('should return playerData value', () => {
        expect(PlayersModule.getPlayerData).toMatchObject({})
      })
    })
  })

  describe('actions', () => {

    describe('action_createPlayers', () => {

      it('should update state with player', () => {
        const oldValue = {}
        const newValue = { '12345': testPlayer }    

        expect(PlayersModule.playerData).toMatchObject(oldValue)
        PlayersModule.action_createPlayers(1)
        expect(PlayersModule.playerData).toMatchObject(newValue)
      })
    })

    describe('action_deletePlayer', () => {

      it('should delete target player', () => {
        const oldValue = { '12345': testPlayer }    
        const newValue = {}

        PlayersModule.action_createPlayers(1)
        expect(PlayersModule.playerData).toMatchObject(oldValue)
        PlayersModule.action_deletePlayer('12345')
        expect(PlayersModule.playerData).toMatchObject(newValue)
      })
    })

    describe('action_setPlayerScore', () => {

      it('should set score for target player', () => {
        const oldValue = 0    
        const newValue = 5

        PlayersModule.action_createPlayers(1)
        expect(PlayersModule.playerData['12345'].score).toEqual(oldValue)
        PlayersModule.action_setPlayerScore({ id: '12345', score: newValue })
        expect(PlayersModule.playerData['12345'].score).toEqual(newValue)
      })
    })

    describe('action_setPlayerName', () => {

      it('should set name for target player', () => {
        const oldValue = 'Player 1'   
        const newValue = 'Jorah Mormont'

        PlayersModule.action_createPlayers(1)
        expect(PlayersModule.playerData['12345'].name).toEqual(oldValue)
        PlayersModule.action_setPlayerName({ id: '12345', name: newValue })
        expect(PlayersModule.playerData['12345'].name).toEqual(newValue)
      })
    })

    describe('action_zeroScores', () => {

      it('should zero scores for all players', () => {
        const oldValue = 5   
        const newValue = 0

        PlayersModule.action_createPlayers(1)
        PlayersModule.action_setPlayerScore({ id: '12345', score: oldValue })
        expect(PlayersModule.playerData['12345'].score).toEqual(oldValue)
        PlayersModule.action_zeroScores()
        expect(PlayersModule.playerData['12345'].score).toEqual(newValue)
      })
    })
  })
})
