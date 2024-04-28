import { it, expect, describe } from 'vitest';


import '@testing-library/jest-dom/vitest';
import { ProfileLinks } from '../../src/components/ProfileLinks';
import { render, screen, } from '@testing-library/react';

describe('Links component', () => {
  it('should render User and Repo when name is provided', () => {
    render(<ProfileLinks userRepo='user/repo' />);
    const link = screen.getAllByRole('link')

    expect(link.length).toBe(2);
  });
});
