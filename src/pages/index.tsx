import dynamic from 'next/dynamic';

const Map = dynamic(() => import('components/Map'), {
  ssr: false,
});

export default function Home() {
  return (
    <Map
      places={[
        {
          id: '2',
          name: 'Toronto',
          slug: 'Toronto',
          location: {
            latitude: 33,
            longitude: -95,
          },
        },
      ]}
    />
  );
}
