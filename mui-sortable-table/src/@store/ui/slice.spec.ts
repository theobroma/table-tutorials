import type { ThemeColorsType } from '../../@types';
import { ThemeColors } from '../../@types';

import { setThemeAC, uiReducer } from './slice';

describe('counter reducer sync actions', () => {
  const initialState = {
    theme: ThemeColors.LIGHT,
  };

  it('should handle initial state', () => {
    expect(uiReducer(undefined, { type: 'unknown' })).toEqual({
      theme: 'light',
    });
  });

  it('should handle setTheme', () => {
    const newTheme: ThemeColorsType = 'dark';
    const actual = uiReducer(initialState, setThemeAC(newTheme));
    expect(actual.theme).toEqual(newTheme);
  });
});
