import CountriesTable from '../components/CountriesTable/CountriesTable';

const fetchCountries = async () => {
  return fetch(
    'https://restcountries.com/v3.1/all?fields=name,flag,population,area,region,cca3',
    { next: { revalidate: 60 } }
  ).then((res) => res.json());
};

export default async function Home() {
  const countries: [] = await fetchCountries();

  return (
    <section>
      <CountriesTable countries={countries} />
    </section>
  );
}
