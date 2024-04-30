import { FormIssue } from '../../src/components/FormIssue';
import { renderWithProviders } from '../../test_utils';
import { fireEvent, screen } from '@testing-library/react';

describe('FormIssue', () => {
  const renderComponent = () => {
    renderWithProviders(<FormIssue />);

    return {
      textBox: screen.getByRole('textbox'),
      button: screen.getByRole('button'),
    };
  };

  it('should have input element', () => {
    const { textBox } = renderComponent();
    expect(textBox).toHaveAttribute('placeholder', 'Enter your repo');
  });

  it('should have load button', () => {
    const { button } = renderComponent();

    expect(button).toHaveTextContent(/load/i);
  });

  it('should be disabled button if input value is empty', () => {
    const { textBox, button } = renderComponent();

    fireEvent.change(textBox, { target: { value: '' } });
    expect(button).toHaveAttribute('disabled');
  });

  it('should be enabled button if input value is non-empty', () => {
    const { textBox, button } = renderComponent();

    fireEvent.change(textBox, { target: { value: '' } });
    expect(button).toHaveAttribute('disabled');

    fireEvent.change(textBox, { target: { value: 'https://' } });
    expect(button).not.toHaveAttribute('disabled');
  });
});
