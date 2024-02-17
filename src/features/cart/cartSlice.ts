import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { TCart } from "../../types/product.types";

const initialState: TCart[] = []

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Omit<TCart, "id" | "totalPrice">>) => {
      const id = nanoid()
      const totalPrice = action.payload.price * action.payload.amount
      const newProduct = { id, ...action.payload, totalPrice }
      state.push(newProduct)
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      state = state.filter(p => p.id !== action.payload)
    }
  }
})

export const { addProduct, removeProduct } = cartSlice.actions
export default cartSlice.reducer