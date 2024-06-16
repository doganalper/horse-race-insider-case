export interface Horse {
  id: string
  name: string
  condition: number
  color: string
  move: number
}

export interface Program {
  horses: Horse[],
  lap: string
}
export type Programs = Program[]

export enum LapStatus {
  STARTED = "STARTED",
  PAUSED = "PAUSED"
}

export enum HorseRaceMutation {
  SET_HORSES = "SET_HORSES",
  GENERATE_PROGRAM = "GENERATE_PROGRAM",
  INCREMENT_LAP = "INCREMENT_LAP",
  MOVE_HORSES = "MOVE_HORSES",
  SET_TRACK_LENGTH = "SET_TRACK_LENGTH",
  APPEND_RESULT = "APPEND_RESULT"
}

export enum HorseRaceAction {
  MOVE_TO_NEXT_LAP = "MOVE_TO_NEXT_LAP"
}
