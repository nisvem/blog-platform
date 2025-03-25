import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';
import '@testing-library/jest-dom';

describe('Button component', () => {
  it('renders with provided text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(<Button>Click me</Button>);
    expect(asFragment()).toMatchSnapshot();
  });
}); 