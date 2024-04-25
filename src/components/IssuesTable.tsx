import { Grid } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../hooks/ReduxHooks';
import { userRepoValue } from '../store/services/query';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { DraggableColumn } from './shared/DraggableColumn';
import { ColumnHeader, FilteredIssues } from '../types/issue';
import { usePreparedIssues } from '../hooks/usePreparedIssues';
import { setFilteredIssues } from '../store/services/filteredIssues';

export const IssuesTable = () => {
  const repo = useAppSelector(userRepoValue);
  const [filteredIssues] = usePreparedIssues(repo);
  const { done, in_progress, todo } = filteredIssues;
  const dispatch = useAppDispatch();

  const handleDragDrop = (results: DropResult) => {
    const { source, destination } = results;

    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }
    const sourceKey = source.droppableId.split(' ').join('_') as keyof FilteredIssues;
    const destinationKey: keyof FilteredIssues = destination.droppableId.split(' ').join('_') as keyof FilteredIssues;
    const newSourceItems = [...filteredIssues[sourceKey]];
    const newDestionationItems =
      source.droppableId !== destination.droppableId ? [...filteredIssues[destinationKey]] : newSourceItems;

    const [deletedItem] = newSourceItems.splice(source.index, 1);
    newDestionationItems.splice(destination.index, 0, deletedItem);
    const newFilteredIssues = { ...filteredIssues };
    newFilteredIssues[sourceKey] = [...newSourceItems];
    newFilteredIssues[destinationKey] = [...newDestionationItems];
    dispatch(setFilteredIssues(newFilteredIssues));
  };

  return (
    <Grid templateColumns="repeat(3, minmax(250px, 1fr))" minH="50%" columnGap={4}>
      <DragDropContext onDragEnd={handleDragDrop}>
        <DraggableColumn issues={todo} columnTitle={ColumnHeader.ToDO} />
        <DraggableColumn issues={in_progress} columnTitle={ColumnHeader.InProgress} />
        <DraggableColumn issues={done} columnTitle={ColumnHeader.Done} />
      </DragDropContext>
    </Grid>
  );
};
