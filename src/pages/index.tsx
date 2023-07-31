import Layout from '@/components/Layout/Layout';
import CountriesTable from '@/components/CountriesTable/CountriesTable';

export default function Home({ countries }: { countries: [] }) {
  return (
    <Layout>
      <CountriesTable countries={countries} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  try {
    const res = await fetch('https://restcountries.com/v3.1/all');
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
