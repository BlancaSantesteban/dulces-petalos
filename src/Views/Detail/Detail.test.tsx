import { render, screen } from '@testing-library/react';
import React from 'react';
import { Detail } from './Detail';

describe('Home de la aplicación', () => {
  it('muestra el nombre de la flor', async () => {
    render(<Detail />);

    expect(await screen.findByText(/petunia/i)).toBeInTheDocument();
  });
});
