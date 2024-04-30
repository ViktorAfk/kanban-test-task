import { FC } from 'react';
import { Flex, Link } from '@chakra-ui/react';

interface Props {
  userRepo: string;
}
const GITHUBLINK = 'https://github.com/';

export const ProfileLinks: FC<Props> = ({ userRepo }) => {
  const [user, repo] = userRepo.split('/');

  return (
    <Flex data-testid="custom-element" alignSelf="flex-start" gap={2} mb={4} alignItems={'center'}>
      <Link textTransform="uppercase" href={`${GITHUBLINK}/${user}`} target="_blank">
        {user}
      </Link>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 16" fill="none">
          <path
            d="M0.328256 8.79214L7.20786 15.6717C7.64554 16.1094 8.35517 16.1094 8.79249 15.6717C9.22981 15.2344 9.22981 14.5248 8.79249 14.0875L2.70503 8L8.79249 1.91289C9.22981 1.47521 9.22981 0.765935 8.79249 0.328258C8.35517 -0.109419 7.64554 -0.109419 7.20786 0.328258L0.327902 7.20786C0.109063 7.4267 -1.90735e-06 7.71317 -1.90735e-06 8C-1.90735e-06 8.28683 0.109418 8.57365 0.328256 8.79214Z"
            fill="black"
          />
        </svg>
      </span>
      <Link textTransform="uppercase" href={`${GITHUBLINK}/${user}/${repo}`} target="_blank">
        {repo}
      </Link>
    </Flex>
  );
};
