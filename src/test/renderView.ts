import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';

export const renderView = (ui: React.ReactElement) =>
  render(ui, { wrapper: Router });
