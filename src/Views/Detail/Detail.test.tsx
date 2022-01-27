import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import React from 'react';
import { renderView } from '../../test/renderView';
import { Detail } from './Detail';

describe('Detail de la aplicación', () => {
  it('al cargar muestra loader', async () => {
    renderView(<Detail />);

    expect(screen.getByTestId('ball-triangle-svg')).toBeInTheDocument();
    await waitForElementToBeRemoved(screen.queryByTestId('ball-triangle-svg'));
  });

  it('muestra el nombre de la flor', async () => {
    renderView(<Detail />);

    expect(await screen.findByText(/girasol/i)).toBeInTheDocument();
  });

  it('muestra el nombre cientifico de la flor', async () => {
    renderView(<Detail />);

    expect(await screen.findByText(/Heliantus annuus/i)).toBeInTheDocument();
  });

  it('muestra el precio de la flor', async () => {
    renderView(<Detail />);

    expect(await screen.findByText(/5.25/i)).toBeInTheDocument();
  });

  it('muestra el numero de riegos de la flor', async () => {
    renderView(<Detail />);

    expect(await screen.findByText(/1/i)).toBeInTheDocument();
  });

  it('muestra el fertilizante recomendado de la flor', async () => {
    renderView(<Detail />);

    expect(await screen.findByText(/phosphorus/i)).toBeInTheDocument();
  });

  it('muestra la altura de la flor', async () => {
    renderView(<Detail />);

    expect(await screen.findByText(/70/i)).toBeInTheDocument();
  });
});
