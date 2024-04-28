import { DropResult } from 'react-beautiful-dnd';
import { ColumnHeader, Issue, IssueItem, } from './types/issue';

export const getTimeFromCreate = (createAt: string) => {
  const DAY_AGO = "day(s) ago";
  const HOURS_AGO = "hour(s) ago";
  const ONE_DAY = 1000 * 3600 * 24;
  const currentDate = new Date().toISOString();;
  const createdDate = new Date(createAt).toISOString();

  const differenceInTime = Date.parse(currentDate) - Date.parse(createdDate);
  const resultDay = differenceInTime / ONE_DAY;

  if (resultDay < 1) {
    return `opened ${Math.round(resultDay * 24)} ${HOURS_AGO}`
  }
  return `opened ${Math.round(resultDay)} ${DAY_AGO}`
};

export const getFiltteredIssues = (items: Issue[]): IssueItem[] => {
  const todo = items.filter(({ assignee, state }) => assignee === null && state === 'open');
  const in_progress = items.filter(({ assignee, state }) => assignee !== null && state === 'open');
  const done = items.filter(({ state }) => state === 'closed');

  return [
    { name: ColumnHeader.ToDO, items: todo },
    { name: ColumnHeader.InProgress, items: in_progress },
    { name: ColumnHeader.Done, items: done },
  ];
};

export const getNewItemsDestination = (items: IssueItem[], results: DropResult) => {
  const { source, destination } = results;

  if (!destination) {
    return;
  }

  if (source.droppableId === destination.droppableId && source.index === destination.index) {
    return;
  }

  const sourceKey = items.findIndex((issue) => issue.name === source.droppableId);
  const destinationKey = items.findIndex((issue) => issue.name === destination.droppableId);

  const newSourceItems = [...items[sourceKey].items];

  const newDestionationItems =
    source.droppableId !== destination.droppableId ? [...items[destinationKey].items] : newSourceItems;

  const [deletedItem] = newSourceItems.splice(source.index, 1);
  newDestionationItems.splice(destination.index, 0, deletedItem);

  const newItems = [...items];

  newItems[sourceKey] = {
    ...items[sourceKey],
    items: newSourceItems,
  };

  newItems[destinationKey] = {
    ...items[destinationKey],
    items: newDestionationItems,
  };
  return newItems;
};

export const getLocalStorageItems = (items: string | null) => {
  const parseItems = items ? JSON.parse(items) : [];

  return parseItems;
}

export const setItemToLocalStorage = (userRepo: string, items: IssueItem[]) => {
  if (!userRepo) {
    return;
  }

  localStorage.setItem(userRepo, JSON.stringify(items));
};
