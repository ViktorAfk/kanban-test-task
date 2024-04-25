import { useEffect } from 'react';
import { selectFilteredIssues, setFilteredIssues } from '../store/services/filteredIssues';
import { useGetAllIssuesQuery } from '../store/services/issues';
import { getFiltteredIssues } from '../utiels';
import { useAppDispatch, useAppSelector } from './ReduxHooks';

export const usePreparedIssues = (userRepo: string) => {
  const dispatch = useAppDispatch();
  const userRepoInStorage = localStorage.getItem(userRepo);
  const filteredIssues = useAppSelector(selectFilteredIssues);

  const { data } = useGetAllIssuesQuery(userRepo);

  useEffect(() => {
    if (!userRepoInStorage) {
      const dataForRender = data
        ? data.map(({ id, number, title, state, comments, body, assignee, assignees }) => ({
            id,
            number,
            title,
            state,
            comments,
            body,
            assignee,
            assignees,
          }))
        : [];

      const preparedIssues = getFiltteredIssues(dataForRender);

      dispatch(setFilteredIssues(preparedIssues));
    }
  }, [data, userRepo]);

  return [filteredIssues];
};
