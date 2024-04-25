import { Container, Heading } from '@chakra-ui/react';
import './App.css';
import { IssuesTable } from './components/IssuesTable';

import { TodoInput } from './components/TodoInput';

export const App = () => {

  return (
      <main>
        <Container maxW='920px' bg='teal' height='100dvh' centerContent>
          <Heading as='h1' size='2xl' m='8'>Kanban board</Heading>
          <TodoInput />
          <IssuesTable />
        </Container>
      </main>
  );
};
