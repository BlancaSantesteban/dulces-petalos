import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import React from 'react';
import { Detail } from './Detail';

describe('Detail de la aplicación', () => {
  it.skip('al cargar muestra loader', async () => {
    render(<Detail />);

    expect(screen.getByTestId('ball-triangle-svg')).toBeInTheDocument();
    await waitForElementToBeRemoved(screen.queryByTestId('ball-triangle-svg'));
  });
  it.skip('muestra el nombre de la flor', async () => {
    render(<Detail />);

    expect(await screen.findByText(/girasol/i)).toBeInTheDocument();
  });
  it.skip('muestra el nombre cientifico de la flor', async () => {
    render(<Detail />);

    expect(await screen.findByText(/Heliantus annuus/i)).toBeInTheDocument();
  });
  it.skip('muestra el precio de la flor', async () => {
    render(<Detail />);

    expect(await screen.findByText(/5.25/i)).toBeInTheDocument();
  });
  it.skip('muestra el numero de riegos de la flor', async () => {
    render(<Detail />);

    expect(await screen.findByText(/1/i)).toBeInTheDocument();
  });
  it.skip('muestra el fertilizante recomendado de la flor', async () => {
    render(<Detail />);

    expect(await screen.findByText(/phosphorus/i)).toBeInTheDocument();
  });
  it.skip('muestra la altura de la flor', async () => {
    render(<Detail />);

    expect(await screen.findByText(/70/i)).toBeInTheDocument();
  });
});
