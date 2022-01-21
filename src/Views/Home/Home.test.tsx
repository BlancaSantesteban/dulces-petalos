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

  it('muestra el precio de una flor', async () => {
    render(<Home />);

    expect(await screen.findByText(/4.95/i)).toBeInTheDocument();
  });

  it('muestra la imagen de una flor', async () => {
    render(<Home />);
    const flor = await screen.findByRole('img', {
      name: /imagen de una petunia/i,
    });

    expect(flor).toBeInTheDocument();
    expect(flor).toHaveAttribute(
      'src',
      'https://dulces-petalos.herokuapp.com/images/petuniaAxillaris.jpeg',
    );
  });

  it('handlers server error', async () => {
    server.use(
      rest.get(
        'https://dulces-petalos.herokuapp.com/api/product',
        (req, res, ctx) => {
          return res(ctx.status(500));
        },
      ),
    );

    render(<Home />);

    expect(await screen.findByText(/ha habido un error/i)).toBeInTheDocument();
  });
});
