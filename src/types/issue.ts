export interface Issue {
  id: number;
  number: number;
  title: string;
  state: string;
  comments: number;
  body: string;
  assignee: null | User;
  assignees: [] | User[];
  
}



export interface User {
  login: string,
  id: number,
  node_id: string,
  gravatar_id: string,
  url: string,
  avatar_url: string,
  html_url: string,
  followers_url: string,
  following_url: string,
  gists_url: string,
  starred_url: string,
  subscriptions_url: string,
  organizations_url: string,
  repos_url: string,
  events_url: string,
  received_events_url: string,
  type: string;
  site_admin: boolean;
}
export interface newIssue {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: User;
  labels: string[];
  state: string;
  locked: boolean;


}

//   "assignee": null,
//   "assignees": [],
//   "milestone": null,
//   "comments": 1,
//   "created_at": "2024-04-22T10:35:56Z",
//   "updated_at": "2024-04-22T11:10:07Z",
//   "closed_at": "2024-04-22T11:10:06Z",
//   "author_association": "OWNER",
//   "active_lock_reason": null,
//   "body": "Created test issue",
//   "reactions": {
//       "url": "https://api.github.com/repos/ViktorAfk/test-issues/issues/1/reactions",
//       "total_count": 0,
//       "+1": 0,
//       "-1": 0,
//       "laugh": 0,
//       "hooray": 0,
//       "confused": 0,
//       "heart": 0,
//       "rocket": 0,
//       "eyes": 0
//   },
//   "timeline_url": "https://api.github.com/repos/ViktorAfk/test-issues/issues/1/timeline",
//   "performed_via_github_app": null,
//   "state_reason": "completed"
// }

export enum ColumnHeader {
  ToDO = 'Todo',
  InProgress = 'In progress',
  Done = 'Done'
}

export interface FilteredIssues {
  todo: Issue[] | [];
  in_progress: Issue[] | [];
  done: Issue[] | [];
}
