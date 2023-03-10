import { MapProps } from 'components/Map';
import HomeTemplate from 'templates/Home';

import { GetPlacesQuery } from 'graphql/generated/graphql';
import { GET_PLACES } from 'graphql/queries';
import client from 'graphql/client';

export default function Home({ places }: MapProps) {
  return <HomeTemplate places={places} />;
}

export const getStaticProps = async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES, {
    first: 100,
  });

  return {
    revalidate: 604800,
    props: {
      places,
    },
  };
};
