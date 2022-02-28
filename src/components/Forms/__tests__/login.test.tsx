import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../Login';

test('displays error message when filled wrong', async () => {
  render(<Login />);

  const emailInput = screen.getByPlaceholderText(/email address/i);
  const errorMessage = screen.queryByText(
    /please, check if the email is valid/i
  );

  expect(errorMessage).not.toBeInTheDocument();
  userEvent.clear(emailInput);
  userEvent.type(emailInput, 'test');

  await waitFor(() => {
    expect(emailInput).toHaveValue('test');
    const onScreenErrorMessage = screen.getByText(
      /please, check if the email is valid/i
    );
    expect(onScreenErrorMessage).toHaveTextContent(
      /please, check if the email is valid/i
    );
  });

  userEvent.clear(emailInput);
  userEvent.type(emailInput, 'test@testing.com');

  await waitFor(() => {
    expect(emailInput).toHaveValue('test@testing.com');
    expect(errorMessage).not.toBeInTheDocument();
  });
});

test('happy path', async () => {
  render(<Login />);
  const emailInput = screen.getByPlaceholderText(/email address/i);
  const passwordInput = screen.getByPlaceholderText(/password/i);

  userEvent.clear(emailInput);
  userEvent.type(emailInput, 'test@testing.com');
  userEvent.clear(passwordInput);
  userEvent.type(passwordInput, 'test1234');

  await waitFor(() => {
    expect(emailInput).toHaveValue('test@testing.com');
    expect(passwordInput).toHaveValue('test1234');
  });

  const submitButton = screen.getByRole('button', {name: /sign in/i});
  userEvent.click(submitButton);

  await waitFor(() => {
    const toast = screen.getByRole('alert');
    expect(toast).toHaveTextContent(/welcome/i);
  });
});
