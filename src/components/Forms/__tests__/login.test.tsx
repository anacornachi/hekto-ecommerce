import {render, screen} from '@testing-library/react';
import Login from '../Login';

test('submit login form', () => {
  render(<Login />);
  const heading = screen.getByRole('heading', {name: 'Login'});
  expect(heading).toBeInTheDocument();
});
