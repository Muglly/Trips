import { render, screen } from '@testing-library/react';

import Map from '.';

describe('Map', () => {
  it('should render without any marker', () => {
    render(<Map />);

    expect(
      screen.getByRole('link', {
        name: /a javascript library for interactive maps/i,
      })
    ).toBeInTheDocument();
  });

  it('should render with the marker in correct', () => {
    const place = {
      id: '1',
      name: 'Salvador',
      slug: 'Salvador',
      location: {
        latitude: 0,
        longitude: 0,
      },
    };

    const placeTwo = {
      id: '2',
      name: 'Toronto',
      slug: 'Toronto',
      location: {
        latitude: 21081996,
        longitude: 20032002,
      },
    };

    render(<Map places={[place, placeTwo]} />);

    expect(screen.getByTitle(/salvador/i)).toBeInTheDocument();
    expect(screen.getByTitle(/Toronto/i)).toBeInTheDocument();
  });
});
