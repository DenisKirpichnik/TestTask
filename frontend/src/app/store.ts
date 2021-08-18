import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import numberReducer from '../features/number/numberSlice';

export const store = configureStore({
  reducer: {
    number: numberReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
