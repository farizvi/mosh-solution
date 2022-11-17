import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import {
  bannerSlice,
  IBannerState,
} from '../../features/hero/slice/banner-slice';

export interface IAppState {
  options: IBannerState;
}

// export const rootReducer = combineReducers<IAppState>({
//   options: bannerSlice.reducer,
// });

export const store = configureStore({
  reducer: {
    options: bannerSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
