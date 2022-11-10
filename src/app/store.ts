// wrapper around the Redux createStore fn
// takes your reducer and makes a create
// automatically sets up a store with the right defaults
// - automatically turns on redux devTools extension
// - automatically adds Thunk middleware
// - automatically turns on development checks (i.e. checking for accidental mutations)
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

// the following type isn't RTK-specific
// it's using TS's inference to figure out as much as possible
// so we don't need to declare this ourselves
// - when we add more slice reducers later, this type gets updated automatically
export type RootState = ReturnType<typeof store.getState>;
