import { createLocalVue } from '@vue/test-utils'
import Players from '@/store/Players'
import uuid from 'uuid/v4'
import Vuex from 'vuex'

// -------------- mocks ------------------

jest.mock('uuid/v4')
uuid.mockImplementationOnce(() => '111')
uuid.mockImplementationOnce(() => '222')
uuid.mockImplementationOnce(() => '111')
uuid.mockImplementationOnce(() => '222')

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

  const testPlayer1 = {
    color: '#47EDA0', 
    id: '111', 
    name: 'Player 1', 
    score: 0,
  }

  const testPlayer2 = {
    color: '#47EDA0', 
    id: '222', 
    name: 'Player 2', 
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

  describe('actions', () => {

    describe('action_createPlayers', () => {

      it('should update state with player', () => {
        const oldValue = {}
        const newValue = { '111': testPlayer1 }    

        expect(PlayersModule.playerData).toMatchObject(oldValue)
        PlayersModule.action_createPlayers(1)
        expect(PlayersModule.playerData).toMatchObject(newValue)
      })
    })

    describe('action_deletePlayer', () => {

      it.skip('should delete target player', () => {
        const oldValue = { '222': testPlayer2 }    
        const newValue = {}

        PlayersModule.action_createPlayers(1)
        expect(PlayersModule.playerData).toMatchObject(oldValue)
        PlayersModule.action_deletePlayer('222')
        expect(PlayersModule.playerData).toMatchObject(newValue)
        // ************************************************
        // ************************************************
        // ***************  in progress  ******************
        // ************************************************
        // ************************************************
      })
    })
  })
})
