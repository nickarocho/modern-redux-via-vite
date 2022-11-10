import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// defines the shape of the state inside of our slice (managed by our reducer)
interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incremented(state) {
      // normally, we would return ...state for an immutable update
      // then overwrite the `value` field (for instance)
      // RTK simplifies this by writing WHAT LOOKS LIKE mutating code
      state.value++;
      // RTK uses `immer` to wrap state updates, and tracks the mutations we try to do
    },
    amountAdded(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

// `slice` has a couple things:
// - a 'reducer' fn that knows how to update data
// - has already generated an "action creator" for each fn inside the reducers field

export const { incremented, amountAdded } = counterSlice.actions;
export default counterSlice.reducer;
