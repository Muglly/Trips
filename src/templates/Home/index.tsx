import { NextSeo } from 'next-seo';

import dynamic from 'next/dynamic';
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline';

import LinkWrapper from 'components/LinkWrapper';
import { MapProps } from 'components/Map';

const Map = dynamic(() => import('components/Map'), {
  ssr: false,
});

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="My Trips"
        description="A project to show my trips and show more informations and photos when clicked."
        openGraph={{
          url: 'https://my-trips-lemon.vercel.app/',
          title: 'My Trips',
          description:
            'A project to show my trips and show more informations and photos when clicked.',
          images: [
            {
              url: 'https://my-trips-lemon.vercel.app/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'My Trips',
            },
          ],
          site_name: 'My Trips',
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  );
}
