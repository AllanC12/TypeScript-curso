export const year: number = 2023
export const month: string = "Dezembro"
export const changePhrase = "Esta variável sofreu alteração de nome"

export function returnYear(): number {
    return year
}

export interface Calculator {
    sumNumbers(n1:number,n2:number): number
}

