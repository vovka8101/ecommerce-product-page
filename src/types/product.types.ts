export type TProduct = {
  readonly id: string
  company: string
  name: string
  description: string
  imgSrc: string[]
  price: number
  discount: number
  oldPrice: number
}

export type TCart = {
  readonly id: string
  name: string
  price: number
  imgSrc: string
  amount: number
  totalPrice: number
}