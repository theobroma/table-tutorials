import { createSlice } from '@reduxjs/toolkit';

import usersMock from './MOCK_DATA';

const initialState = {
  data: usersMock,
  // utils
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: '' as string | null,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // setThemeAC(state, action) {
    //   state.theme = action.payload;
    // },
  },
});

// export const uiReducer = uiSlice.reducer;
// export const { setThemeAC } = uiSlice.actions;
