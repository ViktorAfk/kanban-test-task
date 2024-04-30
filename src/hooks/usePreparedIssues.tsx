import { useEffect } from 'react';
import { selectFilteredIssues, setFilteredIssues } from '../store/services/filteredIssues';
import { useGetAllIssuesQuery } from '../store/services/issues';
import { getFiltteredIssues, getLocalStorageItems } from '../utiels';
import { useAppDispatch, useAppSelector } from './ReduxHooks';

export const usePreparedIssues = (userRepo: string) => {
  const dispatch = useAppDispatch();
  const filteredIssues = useAppSelector(selectFilteredIssues);
  const { data, error: hasError } = useGetAllIssuesQuery(userRepo, { skip: !userRepo });

  useEffect(() => {
    const hasRepoInLocalStorage = localStorage.getItem(userRepo);
    const storageIsues = getLocalStorageItems(hasRepoInLocalStorage);

    if (userRepo && hasRepoInLocalStorage) {
      if (storageIsues.length > 0) {
        dispatch(setFilteredIssues(storageIsues));
      }
    }

    if (userRepo && !hasRepoInLocalStorage) {
      const dataForRender = data
        ? data.map(({ id, number, title, created_at, author_association, state, comments, body, assignee }) => ({
            id,
            number,
            title,
            state,
            comments,
            body,
            assignee,
            author_association,
            created_at,
          }))
        : [];

      const preparedIssues = getFiltteredIssues(dataForRender);

      dispatch(setFilteredIssues(preparedIssues));
    }
  }, [data, userRepo]);

  return { filteredIssues, hasError };
};
