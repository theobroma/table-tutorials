import { createSlice } from '@reduxjs/toolkit';

import type { Person } from '../../@types';

const initialState = {
  data: [
    {
      name: {
        firstName: 'John',
        lastName: 'Doe',
      },
      age: 21,
      gender: 'male',
    },
    {
      name: {
        firstName: 'Jane',
        lastName: 'Doe',
      },
      age: 32,
      gender: 'female',
    },
    {
      name: {
        firstName: 'Joe',
        lastName: 'Doe',
      },
      age: 42,
      gender: 'male',
    },
    {
      name: {
        firstName: 'Kevin',
        lastName: 'Vandy',
      },
      age: 33,
      gender: 'male',
    },
    {
      name: {
        firstName: 'Joshua',
        lastName: 'Rolluffs',
      },
      age: 45,
      gender: 'male',
    },
  ] as Person[],
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
