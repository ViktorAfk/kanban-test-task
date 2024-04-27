import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IssueItem} from "../../types/issue";
import { RootState } from "../store";

interface InitialFilteredIssues {
  value:IssueItem[] | [];
}

const initialState: InitialFilteredIssues = {
  value: []
}

export const filteredIssuesSlice = createSlice({
  name: 'filteredIssues',
  initialState,
  reducers: {
    setFilteredIssues: (state, actiton: PayloadAction<IssueItem[]>) => {
      state.value = actiton.payload
    }
  }
})

export const { setFilteredIssues } = filteredIssuesSlice.actions;

export const selectFilteredIssues = (state: RootState) => state.filteredIssues.value;

export default filteredIssuesSlice.reducer;