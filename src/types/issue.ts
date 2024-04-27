export interface Issue {
  id: number;
  number: number;
  title: string;
  state: string;
  comments: number;
  body: string;
  assignee: null | User;
  created_at: string; 
  author_association: string;
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

export enum ColumnHeader {
  ToDO = 'Todo',
  InProgress = 'In progress',
  Done = 'Done'
}
type IssueHeaders = 'Todo' | 'In progress' | 'Done'

export type IssueItem = {
  name: IssueHeaders;
  items: Issue[] | [];
 }
