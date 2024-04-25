import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FilteredIssues, Issue } from "../../types/issue";
import { RootState } from "../store";

interface InitialFilteredIssues {
  value: {
    todo: Issue[] | [];
    in_progress: Issue[] | [];
    done: Issue[] | [];
  }
}

const initialState: InitialFilteredIssues = {
  value: {
    todo: [],
    in_progress: [],
    done: [],
  }
}

export const filteredIssuesSlice = createSlice({
  name: 'filteredIssues',
  initialState,
  reducers: {
    setFilteredIssues: (state, actiton: PayloadAction<FilteredIssues>) => {
      state.value = actiton.payload
    }
  }
})

export const { setFilteredIssues } = filteredIssuesSlice.actions;

export const selectFilteredIssues = (state: RootState) => state.filteredIssues.value;

export default filteredIssuesSlice.reducer;