import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '@/app/components/Header';

describe('Header', () => {
  it('renders the title and navigation links', () => {
    render(<Header />);
    expect(screen.getByText('Maya-Aska')).toBeInTheDocument();
    expect(screen.getByText('INFO')).toBeInTheDocument();
    expect(screen.getByText('INSTAGRAM')).toBeInTheDocument();
  });
});
