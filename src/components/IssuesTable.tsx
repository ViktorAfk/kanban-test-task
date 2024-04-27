import { Grid } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../hooks/ReduxHooks';
import { userRepoValue } from '../store/services/query';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { DraggableColumn } from './shared/DraggableColumn';
import { usePreparedIssues } from '../hooks/usePreparedIssues';
import { setFilteredIssues } from '../store/services/filteredIssues';
import { getNewItemsDestination, setItemToLocalStorage } from '../utiels';

export const IssuesTable = () => {
  const repo = useAppSelector(userRepoValue);
  const { filteredIssues } = usePreparedIssues(repo);
  const dispatch = useAppDispatch();

  const handleDragDrop = (results: DropResult) => {
    const newItems = getNewItemsDestination(filteredIssues, results);
      if(newItems) {
        dispatch(setFilteredIssues(newItems));
        setItemToLocalStorage(repo, newItems);
      }
  };

  return (
    <Grid templateColumns="repeat(3, minmax(250px, 1fr))" minH="50%" columnGap={4}>
      <DragDropContext onDragEnd={handleDragDrop}>
        {filteredIssues.map(({name, items}) => (
          <DraggableColumn issues={items} columnTitle={name} key={name}/>
        ))}
      </DragDropContext>
    </Grid>
  );
};
