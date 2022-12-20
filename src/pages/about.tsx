import { useRouter } from 'next/router';
import client from 'graphql/client';
import { GET_PAGES } from 'graphql/queries';
import PagesTemplate from 'templates/Pages';

export default function About() {
  const router = useRouter();

  // retorna um loading, ou qualquer coisa enquanto tá sendo criado
  if (router.isFallback) return null;

  return <PagesTemplate />;
}

export async function getStaticPaths() {
  const { pages } = await client.request(GET_PAGES, { first: 3 });

  const paths = pages.map(({ slug }) => ({
    params: { slug },
  }));

  return { paths, fallback: true };
}

// export const getStaticProps = async () => {

//   console.log(pages);

//   return {
//     props: {},
//   };
// };
