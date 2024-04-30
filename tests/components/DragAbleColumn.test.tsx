import { screen } from '@testing-library/react';
import { DraggableColumn } from '../../src/components/shared/DraggableColumn';
import { mockData } from '../../mockApi/mockData';
import { renderWithProviders } from '../../test_utils';
import { server } from './../../mockApi/server';
import { setupStore } from '../../src/store/store';
import { setFilteredIssues } from '../../src/store/services/filteredIssues';

beforeAll(() => {
  server.listen();
  console.log('listen server ...');
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe('DragableColumn', () => {
  interface MockDroppableProvided {
    draggableProps: {
      style: React.CSSProperties;
    };
    innerRef: () => void;
  }

  interface MockDroppableStateSnapshot {}

  interface MockDraggableProvided {
    draggableProps: {
      style: React.CSSProperties;
    };
    innerRef: () => void;
  }

  interface MockDraggableStateSnapshot {}

  vi.mock('react-beautiful-dnd', () => ({
    Droppable: ({
      children,
    }: {
      children: (provided: MockDroppableProvided, snapshot: MockDroppableStateSnapshot) => JSX.Element;
    }) =>
      children(
        {
          draggableProps: { style: {} },
          innerRef: vi.fn(),
        },
        {}
      ),
    Draggable: ({
      children,
    }: {
      children: (provided: MockDraggableProvided, snapshot: MockDraggableStateSnapshot) => JSX.Element;
    }) =>
      children(
        {
          draggableProps: { style: {} },
          innerRef: vi.fn(),
        },
        {}
      ),
    DragDropContext: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  }));

  it('should have Heading in the column', () => {
    const store = setupStore();
    store.dispatch(setFilteredIssues(mockData));
    const mockupData = store.getState().issues.value;
    const { name, items } = mockupData[0];
    renderWithProviders(<DraggableColumn columnTitle={name} issues={items} />);

    const heading = screen.getByRole('heading', { level: 2 });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(name);
  });

  it('should don not have issues in the component if array is empty', () => {
    const store = setupStore();
    store.dispatch(setFilteredIssues(mockData));
    const mockupData = store.getState().issues.value;
    const { name, items } = mockupData[0];

    renderWithProviders(<DraggableColumn columnTitle={name} issues={items} />);

    const elemente = screen.queryByTestId('custom-element');
    expect(elemente).not.toBeInTheDocument();
  });

  it('should have correct number of elements in the array if array is not empty', () => {
    const store = setupStore();
    store.dispatch(setFilteredIssues(mockData));
    const mockupData = store.getState().issues.value;
    const { name, items } = mockupData[1];

    renderWithProviders(<DraggableColumn columnTitle={name} issues={items} />);

    const elements = screen.getAllByTestId('custom-element');
    expect(elements).toHaveLength(items.length);
  });

  it('should have corect title in the card', async () => {
    const { name, items } = mockData[2];

    renderWithProviders(<DraggableColumn columnTitle={name} issues={items} />);

    items.forEach((item) => {
      const heading = screen.getByRole('heading', { name: item.title });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent(item.title);
    });
  });
});
