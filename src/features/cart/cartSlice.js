import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
  cartItems: [],
  numItemsInCart: 9,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0
}

const cartSlice = createSlice({
  name: "cart",
  initialState: defaultState,
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;
    },
    clearCart: (state) => {
      console.log("clear cart");
    },
    removeItem: (state, action) => {
      console.log("edit cart");
    },
    editItem: (state, action) => {
      console.log(action.payload);
    }
  }
});

export const {addItem, clearCart, removeItem, editItem} = cartSlice.actions;
export default cartSlice.reducer;