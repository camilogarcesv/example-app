import '@testing-library/jest-dom';
import { render, screen, fireEvent, act } from '@testing-library/react';
import Index from '../../pages/index';
import { CountriesList } from '../fixtures/countriesList';

global.fetch = jest.fn().mockImplementation(() => {
  return Promise.resolve({
    json: () => Promise.resolve(CountriesList),
    ok: true,
    status: 200,
    statusText: 'OK',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    redirected: false,
    type: 'basic',
    url: '',
    clone: () => new Response(),
  });
});

describe('Testing World List App', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it('Should render successfully', () => {
    const { container } = render(<Index countries={CountriesList} />);

    expect(container).toMatchSnapshot();
  });

  it('should render list of countries', () => {
    render(<Index countries={CountriesList} />);

    const countryElements = screen.getAllByTestId('country-item');
    expect(countryElements).toHaveLength(CountriesList.length);

    for (let i = 0; i < CountriesList.length; i++) {
      expect(countryElements[i]).toHaveTextContent(
        CountriesList[i].name.common
      );
    }
  });
});
