import { Issue } from "./types/issue";

export const getFiltteredIssues = (items: Issue[]) => {
  const todo = items.filter(({ assignee, state}) => assignee ===  null && state === 'open');
  const in_progress = items.filter(({ assignee, state }) => assignee !== null && state === 'open');
  const done = items.filter(({ state }) => state === 'closed');

  return { todo, in_progress, done }
}