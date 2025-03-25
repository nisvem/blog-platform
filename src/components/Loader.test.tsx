import React from 'react';
import { render } from '@testing-library/react';
import { Loader } from './Loader';
import '@testing-library/jest-dom';

describe('Loader component', () => {
  it('renders correctly', () => {
    const { container } = render(<Loader />);
    expect(container.firstChild).toBeInTheDocument();
  });
}); 