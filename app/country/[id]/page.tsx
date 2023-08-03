import React from 'react';
import styles from './Country.module.css';

const fetchCountry = async (id: string) => {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${id}`, {
    next: { revalidate: 60 },
  });

  const [country] = await res.json();
  return country;
};

const Country = async ({ params }: { params: any }) => {
  const { id } = params;
  const country = await fetchCountry(id);
  return (
    <div className={styles.container}>
      <div className={styles.container_left}>
        <div className={styles.overview_panel}>
          <h1 className={styles.overview_name}>{country.name.common}</h1>
          <div className={styles.overview_region}>{country.region}</div>

          <div className={styles.overview_numbers}>
            <div className={styles.overview_population}>
              <div className={styles.overview_value}>{country.population}</div>
              <div className={styles.overview_label}>Population</div>
            </div>

            <div className={styles.overview_area}>
              <div className={styles.overview_value}>{country.area}</div>
              <div className={styles.overview_label}>Area</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container_right}>
        <div className={styles.details_panel}>
          <h4 className={styles.details_panel_heading}>Details</h4>

          <div className={styles.details_panel_row}>
            <div className={styles.details_panel_label}>Capital</div>
            <div className={styles.details_panel_value}>{country.capital}</div>
          </div>

          <div className={styles.details_panel_row}>
            <div className={styles.details_panel_label}>Languages</div>
            <div className={styles.details_panel_value}>
              {country.languages
                ? Object.values(country.languages).join(', ')
                : 'No languages info'}
            </div>
          </div>

          <div className={styles.details_panel_row}>
            <div className={styles.details_panel_label}>Currencies</div>
            <div className={styles.details_panel_value}>
              {country.currencies
                ? Object.values(country.currencies)
                    .map((currency: any) => currency.name)
                    .join(', ')
                : 'No currencies info'}
            </div>
          </div>

          <div className={styles.details_panel_row}>
            <div className={styles.details_panel_label}>Location</div>
            <div className={styles.details_panel_value}>
              <a
                href={country.maps.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.details_google_maps_link}
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
