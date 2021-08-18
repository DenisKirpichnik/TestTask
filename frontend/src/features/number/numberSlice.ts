import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { axiosInstance } from '../../core/axios';

export interface numberState {
  number: number;
  returnedNumber: number | null;
  loading: boolean;
  error: any;
  allNumbers: number[] | null;
}

const initialState: numberState = {
  number: 0,
  returnedNumber: null,
  loading: false,
  error: null,
  allNumbers: null,
};

export const numberSlice = createSlice({
  name: 'number',
  initialState,

  reducers: {
    calculateNumberRequest: (state) => {
      state.loading = true;
    },
    calculateNumberSuccess: (state, action: PayloadAction<number>) => {
      state.loading = false;
      state.returnedNumber = action.payload;
    },
    calculateNumberFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    getNumbersRequest: (state) => {
      state.loading = true;
    },
    getNumbersSuccess: (state, action: PayloadAction<number[]>) => {
      state.loading = false;
      state.allNumbers = action.payload;
    },
    getNumbersFailure: (state) => {
      state.loading = false;
    },
  },
});

export const {
  calculateNumberRequest,
  calculateNumberSuccess,
  calculateNumberFailure,
  getNumbersRequest,
  getNumbersSuccess,
  getNumbersFailure,
} = numberSlice.actions;

export const calculateClosestFibonacciNumber =
  (formdata: { number: number }): AppThunk =>
  async (dispatch) => {
    const { number } = formdata;
    const sendNumber = Number(number);
    dispatch(calculateNumberRequest());
    try {
      const { data } = await axiosInstance.post(`/numbers/find-fibonacci-number`, {
        number: sendNumber,
      });

      dispatch(calculateNumberSuccess(data?.data?.closestFibonacciNumber));
    } catch (error) {
      dispatch(calculateNumberFailure(error?.response?.data?.error[0]?.text));
    }
  };

export const getAllTheNumbers = (): AppThunk => async (dispatch) => {
  dispatch(getNumbersRequest());
  try {
    const { data } = await axiosInstance.get(`/numbers/get-fibonacci-numbers`);
    dispatch(getNumbersSuccess(data.data.allNumbers));
  } catch (error) {
    dispatch(getNumbersFailure());
  }
};

export const returnedNumber = (state: RootState) => state.number.returnedNumber;
export const loading = (state: RootState) => state.number.loading;
export const allNumbers = (state: RootState) => state.number.allNumbers;

export default numberSlice.reducer;
