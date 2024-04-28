import { Container, Heading } from '@chakra-ui/react';
import './App.css';
import { IssuesTable } from './components/IssuesTable';

import { TodoInput } from './components/TodoInput';
import { ProfileLinks } from './components/ProfileLinks';
import { useAppSelector } from './hooks/ReduxHooks';
import { userRepoValue } from './store/services/query';

export const App = () => {
  const userRepo = useAppSelector(userRepoValue);

  return (
    <main>
      <Container maxW={'920px'} bg="teal" centerContent pb={4}>
        <Heading as="h1" size="2xl" m="8">
          Kanban board
        </Heading>
        <TodoInput />
        {userRepo && <ProfileLinks userRepo={userRepo} />}
        <IssuesTable userRepo={userRepo}/>
      </Container>
    </main>
  );
};
