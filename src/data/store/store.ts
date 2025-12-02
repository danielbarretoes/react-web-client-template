import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

// Placeholder slice para evitar el error del store vacío
const placeholderSlice = createSlice({
  name: "placeholder",
  initialState: {},
  reducers: {},
});

// Placeholder reducer - puedes agregar tus reducers aquí más adelante
const rootReducer = {
  placeholder: placeholderSlice.reducer,
  // Agrega tus slices aquí cuando los crees
  // ejemplo: counter: counterSlice.reducer,
};

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
