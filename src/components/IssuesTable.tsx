import { FC } from 'react';
import { Alert, AlertDescription, AlertIcon, AlertTitle, Grid } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../hooks/ReduxHooks';
import { userRepoValue } from '../store/services/query';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { DraggableColumn } from './shared/DraggableColumn';
import { usePreparedIssues } from '../hooks/usePreparedIssues';
import { setFilteredIssues } from '../store/services/filteredIssues';
import { getNewItemsDestination, setItemToLocalStorage } from '../utiels';

interface Props {
  userRepo: string;
}

export const IssuesTable: FC<Props> = ({ userRepo }) => {
  const repo = useAppSelector(userRepoValue);
  const { filteredIssues, hasError } = usePreparedIssues(userRepo);
  const dispatch = useAppDispatch();

  const handleDragDrop = (results: DropResult) => {
    const newItems = getNewItemsDestination(filteredIssues, results);

    if (newItems) {
      dispatch(setFilteredIssues(newItems));
      setItemToLocalStorage(repo, newItems);
    }
  };

  return (
    <>
      {hasError ? (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Oops, something went wrong</AlertTitle>
          <AlertDescription>Are you sure your repo exists? Please check information about your repo.</AlertDescription>
        </Alert>
      ) : (
        <Grid
          w={'100%'}
          templateColumns={{
            base: 'repeat(1, minmax(200px, 1fr))',
            md: 'repeat(3, minmax(220px, 1fr))',
          }}
          gap={4}
        >
          <DragDropContext onDragEnd={handleDragDrop}>
            {filteredIssues.map(({ name, items }) => (
              <DraggableColumn issues={items} columnTitle={name} key={name} />
            ))}
          </DragDropContext>
        </Grid>
      )}
    </>
  );
};
