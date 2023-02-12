import { createSlice } from '@reduxjs/toolkit';

// Redux Steps 3: create Redux State


export const counterSlice = createSlice({
   name: 'counter',
   initialState: {
       value: 0
   },
    reducers:{
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            if(state.value > 0){
                state.value -= 1;
            }
        },
        changeByAmount: (state,action) => {
            if(action.payload >= 0)
                state.value = action.payload;
        },

        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
});

// Action creators are generated for each case reducer function
export const {increment, decrement, changeByAmount } = counterSlice.actions;

export default counterSlice.reducer;


// export const incrementAsync = (amount:any) => (dispatch:any) => {
//     setTimeout(() => {
//         dispatch(counterSlice.incrementByAmount(amount))
//     }, 1000)
// }
