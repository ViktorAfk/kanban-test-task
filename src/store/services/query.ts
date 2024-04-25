import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface QueryState {
  value: string;
}

const initialState: QueryState = {
  value: '',
};

export const userRepoSlice = createSlice({
  name: 'userRepo',
  initialState,
  reducers: {
    setUserRepo: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setUserRepo } = userRepoSlice.actions;

export const userRepoValue = (state: RootState) => state.userRepo.value;

export default userRepoSlice.reducer;
