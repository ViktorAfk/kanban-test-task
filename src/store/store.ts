import { configureStore } from '@reduxjs/toolkit';
import { issuesApi } from './services/issues';
import userRepoReducer from './services/query';
import filteredIssuesReduser from './services/filteredIssues';

export const store = configureStore({
  reducer: {
    userRepo: userRepoReducer,
    [issuesApi.reducerPath]: issuesApi.reducer,
    filteredIssues: filteredIssuesReduser,
    
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(issuesApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
