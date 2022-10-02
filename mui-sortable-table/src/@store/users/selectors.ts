import type { RootState } from '../configureStore';

export const usersSelector = (state: RootState) => {
  return state.users;
};
