export const mockData = [
  {
    name: 'Todo',
    items: [],
  },
  {
    name: 'In progress',
    items: [
      {
        id: 2256189503,
        number: 1,
        title: 'I am test issues',
        state: 'closed',
        comments: 1,
        body: 'Created test issue',
        assignee: null,
        author_association: 'OWNER',
        created_at: '2024-04-22T10:35:56Z',
      },
    ],
  },
  {
    name: 'Done',
    items: [
      {
        id: 2261349926,
        number: 3,
        title: 'Test drag-n-drop',
        state: 'closed',
        comments: 0,
        body: 'I am testing drag-n-drop',
        assignee: null,
        author_association: 'OWNER',
        created_at: '2024-04-24T13:46:53Z',
      },
      {
        id: 2258407345,
        number: 2,
        title: 'new issue',
        state: 'open',
        comments: 0,
        body: null,
        assignee: {
          login: 'ViktorAfk',
          id: 110293439,
          node_id: 'U_kgDOBpLxvw',
          avatar_url: 'https://avatars.githubusercontent.com/u/110293439?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/ViktorAfk',
          html_url: 'https://github.com/ViktorAfk',
          followers_url: 'https://api.github.com/users/ViktorAfk/followers',
          following_url: 'https://api.github.com/users/ViktorAfk/following{/other_user}',
          gists_url: 'https://api.github.com/users/ViktorAfk/gists{/gist_id}',
          starred_url: 'https://api.github.com/users/ViktorAfk/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/ViktorAfk/subscriptions',
          organizations_url: 'https://api.github.com/users/ViktorAfk/orgs',
          repos_url: 'https://api.github.com/users/ViktorAfk/repos',
          events_url: 'https://api.github.com/users/ViktorAfk/events{/privacy}',
          received_events_url: 'https://api.github.com/users/ViktorAfk/received_events',
          type: 'User',
          site_admin: false,
        },
        author_association: 'OWNER',
        created_at: '2024-04-23T09:36:20Z',
      },
    ],
  },
];