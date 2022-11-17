import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
import { IOptionsResult, IOptionValue } from '../models/options-model';
import { HeroService } from '../services/hero-service';

export interface IBannerState {
  loading: boolean;
  data: IOptionsResult | null;
  errorMessage: string;
}

const initialState: IBannerState = {
  loading: false,
  data: null,
  errorMessage: '',
};

export const bannerSlice = createSlice({
  name: 'banner',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload;
    },
    setOptions: (state, action: PayloadAction<IOptionsResult>) => {
      state.data = action.payload;
    },
  },
});

const { setLoading, setError, setOptions } = bannerSlice.actions;

export const loadOptions = () => async (dispatch: Dispatch) => {
  const heroService = new HeroService();
  try {
    const optionsResult = await heroService.getOptions();
    const optionsArray: IOptionValue[] = [];

    Object.entries(optionsResult).forEach(result => {
      optionsArray.push({
        title: Object.values(result)[0],
        values: Object.values(result)[1],
      });
    });

    const options: IOptionsResult = {
      optionValues: optionsArray
    };

    dispatch(setLoading(true));
    dispatch(setOptions(options));
  } catch (e: any) {
    dispatch(setError(e));
  } finally {
    dispatch(setLoading(false));
  }
};
