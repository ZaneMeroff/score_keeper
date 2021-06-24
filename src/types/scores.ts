export type Score = {
  id: string
  name: string
  currentScore: number
}

export type ScoreData = {
  [key: string]: Score
}