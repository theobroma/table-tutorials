import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { waitForMe } from '../../@utils/waitforme';

import usersMock from './MOCK_DATA';

const initialState = {
  data: usersMock,
  // utils
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: '' as string | null,
};

export const addUserTC = createAsyncThunk<
  any,
  any, // { rejectValue: string }
  { rejectValue: any }
>('users/addUser', async (param: any, thunkAPI) => {
  try {
    await waitForMe(500);
    console.log('param :>> ', param);
    return {
      name: {
        firstName: param.firstName,
        lastName: param.lastName,
      },
      age: param.age,
      gender: param.gender,
    };
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // setThemeAC(state, action) {
    //   state.theme = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addUserTC.pending, (state) => {
        state.isLoading = true;
        //   clear data
        state.isSuccess = false;
        state.isError = false;
        state.error = '';
      })
      .addCase(addUserTC.fulfilled, (state, action) => {
        if (action.payload) {
          state.data.push(action.payload);
          // mimic no results
          // state.data = {
          //   coins: Array(0),
          //   stats: {},
          // } as CoinsResponseType['data'];
        }
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(addUserTC.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
        }
        state.isError = true;
        state.isLoading = false;
        // console.log('getCoinsTC.rejected');
      });
  },
});

// export const uiReducer = uiSlice.reducer;
// export const { setThemeAC } = uiSlice.actions;
