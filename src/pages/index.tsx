import Layout from '@/components/Layout/Layout';
import CountriesTable from '@/components/CountriesTable/CountriesTable';
import { Country } from '@/types/Country';

export default function Home({ countries }: { countries: Country[] }) {
  return (
    <Layout>
      <CountriesTable countries={countries} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  try {
    const res = await fetch(
      'https://restcountries.com/v3.1/all?fields=name,flag,population,area,region,cca3'
    );
    const countries = await res.json();
    return {
      props: {
        countries,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        countries: [],
      },
    };
  }
};
