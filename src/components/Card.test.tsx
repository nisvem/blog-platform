import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';
import '@testing-library/jest-dom';

const mockPost = {
  id: 1,
  title: 'Test Post',
  description: 'This is a test post',
  createdAt: new Date('2023-01-01T00:00:00Z'),
  author: 'Test Author',
};

describe('Card component', () => {
  it('renders with provided post data', () => {
    render(<Card post={mockPost} />);
    expect(screen.getAllByText(/Test Post/i)[0]).toBeInTheDocument();
    expect(screen.getByText(/This is a test post/i)).toBeInTheDocument();
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(<Card post={mockPost} />);
    expect(asFragment()).toMatchSnapshot();
  });
}); 