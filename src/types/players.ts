export type Player = {
  id: string
  name: string
  currentScore: number
}

export type PlayerData = {
  [key: string]: Player
}