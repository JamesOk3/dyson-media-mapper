import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import LoginForm from './LoginForm';
import * as webpack from '@svgr/webpack';


test('renders administration page heading', async () => {
  render(<LoginForm />);
  // const headingElement = screen.getAllByRole('heading');
  // expect(headingElement).toHaveLength(1);
  expect(screen.getByText('Enter Your login credentials')).toBeInTheDocument();
});
