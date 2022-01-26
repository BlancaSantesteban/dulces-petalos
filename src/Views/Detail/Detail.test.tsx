import { render, screen } from '@testing-library/react';
import React from 'react';
import { Detail } from './Detail';

describe('Detail de la aplicación', () => {
  it('muestra el nombre de la flor', async () => {
    render(<Detail />);

    expect(await screen.findByText(/girasol/i)).toBeInTheDocument();
  });
  it('muestra el nombre cientifico de la flor', async () => {
    render(<Detail />);

    expect(await screen.findByText(/Heliantus annuus/i)).toBeInTheDocument();
  });
});
