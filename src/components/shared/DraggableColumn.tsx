import { Box, GridItem, Heading } from '@chakra-ui/react';
import { Draggable } from 'react-beautiful-dnd';
import { Issue } from '../../types/issue';
import { FC } from 'react';
import { StrictModeDroppable } from './StrictModeDroppable';

interface Props {
  issues: Issue[] | undefined;
  columnTitle: string;
}

export const DraggableColumn: FC<Props> = ({ issues, columnTitle }) => {
  return (
    <GridItem borderRadius="md" bg="white" w="100%" p={2}>
      <Heading as="h2">{columnTitle}</Heading>
      <StrictModeDroppable droppableId={columnTitle.toLowerCase()} type="group">
        {(provided) => (
          <Box {...provided.droppableProps} ref={provided.innerRef}>
            {issues?.map((repo, index) => {
              return (
                <Draggable draggableId={repo.id.toString()} key={repo.id} index={index}>
                  {(provided) => (
                    <Box {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
                      <Heading as="h3" size={'m'}>
                        {repo.title}
                      </Heading>
                      <p>{repo.body}</p>
                    </Box>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </Box>
        )}
      </StrictModeDroppable>
    </GridItem>
  );
};
