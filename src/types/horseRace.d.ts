export interface Horse {
  id: string
  name: string
  condition: number
  color: string
}

export type Program = {
  horses: Horse[],
  title: string
}
export type Programs = Program[]
