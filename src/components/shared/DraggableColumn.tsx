import { Box, GridItem, Heading } from '@chakra-ui/react';
import { Draggable } from 'react-beautiful-dnd';
import { Issue } from '../../types/issue';
import { FC } from 'react';
import { StrictModeDroppable } from './StrictModeDroppable';
import { getTimeFromCreate } from '../../utiels';

interface Props {
  issues: Issue[] | [];
  columnTitle: string;
}

export const DraggableColumn: FC<Props> = ({ issues, columnTitle }) => {
  return (
    <GridItem borderRadius="md" bg="white" w="100%"  p={2}>
      <Heading as="h2" mb={'2'}>{columnTitle}</Heading>
      <StrictModeDroppable droppableId={columnTitle} type="group">
        {(provided) => (
          <Box h={'370px'} overflowY={'scroll'} {...provided.droppableProps} ref={provided.innerRef}>
            {issues?.map((repo, index) => {
              return (
                <Draggable draggableId={repo.id.toString()} key={repo.id} index={index}>
                  {(provided) => (
                    <Box
                      textAlign={'left'}
                      backgroundColor={'teal'}
                      mb={'2'}
                      borderRadius="md"
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                      p={2}
                    >
                      <Heading as="h3" size={'m'} mb={2}>
                        {repo.title}
                      </Heading>
                      <p>{`#${repo.number} ${getTimeFromCreate(repo.created_at)}`}</p>
                      <p>{`${repo.author_association} | Comments: ${repo.comments}`}</p>
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
