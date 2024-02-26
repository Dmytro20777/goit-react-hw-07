import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacsSlice";


export const store = configureStore({
  reducer: contactsReducer,
});
