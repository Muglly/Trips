import { gql } from 'graphql-request';

export const GET_PAGES = gql`
  query getPages($first: Int) {
    pages(first: $first) {
      id
      heading
      slug
      body {
        html
      }
    }
  }
`;

export const GET_PAGE_BY_SLUG = gql`
  query getPageBySlug($slug: String!) {
    page(where: { slug: $slug }) {
      id
      heading
      slug
      body {
        html
      }
    }
  }
`;

export const GET_PLACES = gql`
  query getPlaces($first: Int) {
    places(first: $first) {
      id
      slug
      name
      description {
        html
      }
      location {
        latitude
        longitude
      }
      gallery {
        url
        height
        width
      }
    }
  }
`;

export const GET_PLACE_BY_SLUG = gql`
  query getPlaceBySlog($slug: String!) {
    place(where: { slug: $slug }) {
      id
      slug
      name
      description {
        html
        text
      }
      location {
        latitude
        longitude
      }
      gallery {
        url
        height
        width
      }
    }
  }
`;
