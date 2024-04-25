import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Issue } from '../../types/issue';

export const issuesApi = createApi({
  reducerPath: 'issuesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
  endpoints: (builder) => ({
    getAllIssues: builder.query<Issue[], string>({
      query: (userRepo) => `repos/${userRepo}/issues?state=all`,
    }),
  }),
});

export const { useGetAllIssuesQuery } = issuesApi;
