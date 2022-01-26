import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import React from 'react';
import { server } from '../../mocks/server';
import { Home } from './Home';

describe('Home de la aplicación', () => {
  it.skip('al cargar muestra loader', async () => {
    render(<Home />);

    expect(screen.getByTestId('ball-triangle-svg')).toBeInTheDocument();
    await waitForElementToBeRemoved(screen.queryByTestId('ball-triangle-svg'));
  });

  it('muestra el nombre de una flor', async () => {
    render(<Home />);

    expect(await screen.findByText(/girasol/i)).toBeInTheDocument();
  });

  it.skip('muestra el precio de una flor', async () => {
    render(<Home />);

    expect(await screen.findByText(/4.95/i)).toBeInTheDocument();
  });

  it.skip('muestra la imagen de una flor', async () => {
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

  it.skip('handlers server error', async () => {
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

  it.skip('filtra por nombre', async () => {
    render(<Home />);
    userEvent.type(await screen.findByRole('searchbox'), 'girasol');

    expect(screen.queryByText(/elecho/i)).not.toBeInTheDocument();
    expect(await screen.findByText(/girasol/i)).toBeInTheDocument();
  });
});
