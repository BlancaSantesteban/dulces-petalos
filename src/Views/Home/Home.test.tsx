import { render, screen } from '@testing-library/react';
import React from 'react';
import { Home } from './Home';

describe('Home de la aplicación', () => {
  it('muestra el nombre de una flor', async () => {
    render(<Home />);

    expect(await screen.findByText(/petunia/i)).toBeInTheDocument();
  });
});
