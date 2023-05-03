import { faker } from '@faker-js/faker'

export type Product = {
  id: number
  code: string
  name: string
  category: string
  brand: string
  type: string
  description: string
}

const range = (len: number) => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newProduct = (): Product => {
  return {
    id: faker.datatype.number(3),
    code: faker.datatype.string(3),
    name: faker.datatype.string(40),
    category: faker.datatype.string(40),
    brand: faker.datatype.string(40),
    type: faker.datatype.string(40),
    description: faker.datatype.string(100)
  }
}

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Product[] => {
    const len = lens[depth]!
    return range(len).map((d): Product => {
      return {
        ...newProduct()
      }
    })
  }

  return makeDataLevel()
}
