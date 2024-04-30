import { fireEvent } from '@testing-library/react';
import { App } from '../src/App';
import { renderWithProviders } from '../test_utils';

describe('App component', () => {
  it('should have header', () => {
    const { getByRole } = renderWithProviders(<App />);

    const header = getByRole('heading', { level: 1 });
    expect(header).toHaveTextContent(/kanban board/i);
  });

  it('should be visible profile links if user repo in the store', () => {
    const { getByTestId, getByRole } = renderWithProviders(<App />);
    const button = getByRole('button', { name: /load/i });
    const input = getByRole('textbox');
    fireEvent.change(input, { target: { value: 'https://github.com/ViktorAfk/test-issues' } });
    fireEvent.click(button);

    const element = getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });

  it('should not be visible profile links if there is no user repo in the store', () => {
    const { queryByTestId } = renderWithProviders(<App />);

    const element = queryByTestId('custom-element');

    expect(element).not.toBeInTheDocument();
  });
});
