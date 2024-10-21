import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: ["burger", "pizza"]
    },
    reducers: {
        addItems: (state, action) => {
            debugger;
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            debugger;
            state.items.pop()
        },
        clearCard: (state) => {
            state.items.length = 0;
        }
    }
});
export const { addItems, removeItem, clearCard } = cartSlice.actions;
export default cartSlice.reducer;