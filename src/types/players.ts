export type Player = {
  id: string
  name: string
  score: number
}

export type PlayerData = {
  [key: string]: Player
}