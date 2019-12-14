import React from 'react';
import { render } from '@testing-library/react';
import BelajarTesting from './BelajarTesting';

describe('Testing belajar test component', () => {
  it('Render result of 1 + 3 = 4', () => {
    const { getByText } = render(<BelajarTesting nilai1={1} nilai2={3} />);
    const divElement = getByText(/4/i);
    expect(divElement).toBeInTheDocument();
  });

  it('must not return any error if not including nilai1 props', () => {
    const result = '4';
    const { queryByText } = render(<BelajarTesting nilai2={3} />);

    expect(queryByText(result)).toBeNull();
  });

  it('must not return any error if not including nilai2 props', () => {
    const result = '4';
    const { queryByText } = render(<BelajarTesting nilai1={1} />);

    expect(queryByText(result)).toBeNull();
  });

  it('must not return any error if not including any props', () => {
    const result = '4';
    const { queryByText } = render(<BelajarTesting />);

    expect(queryByText(result)).toBeNull();
  });
});
