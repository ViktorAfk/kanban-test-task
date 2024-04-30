import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { issuesApi } from './services/issues';
import userRepoReducer from './services/query';
import filteredIssuesReduser from './services/filteredIssues';

export const rootReducer = combineReducers({
  userRepo: userRepoReducer,
  issues: filteredIssuesReduser,
  [issuesApi.reducerPath]: issuesApi.reducer,
});

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(issuesApi.middleware),
  });
};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
