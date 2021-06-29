export type Player = {
  id: string
  name: string
  score: number,
  color: string
}

export type PlayerData = {
  [key: string]: Player
}