import { ProfileLinks } from '../../src/components/ProfileLinks';
import { render, screen } from '@testing-library/react';

describe('Links component', () => {
  it('should have two link elemennts in the document', () => {
    render(<ProfileLinks userRepo="user/repo" />);
    const link = screen.getAllByRole('link');

    expect(link.length).toBe(2);
  });

  it('should render User and Repo when name is provided', () => {
    render(<ProfileLinks userRepo="user/repo" />);
    const userLink = screen.getByText(/user/i);
    const repoLink = screen.getByText(/repo/i);

    expect(userLink).toBeInTheDocument();
    expect(repoLink).toBeInTheDocument();
  });
});
