import React, { FC } from 'react';
import styles from './CountriesTable.module.css';
import Link from 'next/link';

interface Country {
  name: {
    common: string;
  };
  flag: string;
  population: number;
  area?: number;
  region?: string;
  cca3?: string;
}

interface CountriesTableProps {
  countries: Country[];
}

const CountriesTable: FC<CountriesTableProps> = ({ countries }) => {
  return (
    <div>
      <div className={styles.heading}>
        <div className={styles.heading_flag}></div>

        <button className={styles.heading_name}>
          <div>Name</div>
        </button>

        <button className={styles.heading_population}>
          <div>Population</div>
        </button>

        <button className={styles.heading_area}>
          <div>
            Area (km<sup style={{ fontSize: '0.5rem' }}>2</sup>)
          </div>
        </button>

        <button className={styles.heading_region}>
          <div>Region</div>
        </button>
      </div>

      {countries.map((country) => (
        <Link
          href={`/country/${country.cca3}`}
          key={country.name.common}
          data-testid="country-item"
        >
          <div className={styles.row}>
            <div className={styles.flag}>{country.flag}</div>

            <div className={styles.name}>{country.name.common}</div>

            <div className={styles.population}>{country.population}</div>

            <div className={styles.area}>{country.area || 0}</div>

            <div className={styles.region}>{country.region || 'No Region'}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CountriesTable;
