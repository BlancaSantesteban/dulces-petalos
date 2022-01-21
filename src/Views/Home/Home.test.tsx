import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import React from 'react';
import { server } from '../../mocks/server';
import { Home } from './Home';

describe('Home de la aplicación', () => {
  it('muestra el nombre de una flor', async () => {
    render(<Home />);

    expect(await screen.findByText(/petunia/i)).toBeInTheDocument();
  });
  it('muestra el header', async () => {
    render(<Home />);

    expect(await screen.findByText(/dulces pétalos/i)).toBeInTheDocument();
  });
  it('handlers server error', async () => {
    server.use(
      rest.get('/api/products', (req, res, ctx) => {
        return res(ctx.status(500));
      }),
    );
  });
});
