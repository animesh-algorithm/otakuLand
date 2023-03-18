import Hero from "@/components/landing-page/hero";
import { fetchTrendingAnimeNames } from "@/utils/kitsu";
import Head from "next/head";

interface Props {
  trendingAnimesNames: any;
}

export default function Home({ trendingAnimesNames }: Props) {
  return (
    <>
      <Head>
        <title>Otaku Land - The Ultimate Destination for Anime Fan</title>
        <meta
          name="keywords"
          content="anime, manga, otaku, anime fan, manga fan, anime news, manga news, anime reviews, manga reviews, anime recommendations, manga recommendations, anime characters, manga characters, anime shows, manga shows, anime movies, manga movies, anime series, manga series, anime episodes, manga episodes, anime seasons, manga seasons, anime studios, manga studios, anime genres, manga genres, anime ratings, manga ratings, anime lists, manga lists, anime characters, manga characters"
        />
        <meta
          name="description"
          content="Discover the ultimate online destination for anime and manga fans at Otaku Land. Explore a vast collection of content, connect with other passionate fans, and stay up-to-date on the latest trends in the anime world"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="robots" href="index, follow" />
        <link rel="canonical" href="https://otakuland.animesharma3.com/" />
      </Head>
      {/* Landing Page */}

      {/* Hero Section */}
      <Hero trendingAnimesNames={trendingAnimesNames} />
    </>
  );
}

export const getStaticProps = async () => {
  const trendingAnimesNames = await fetchTrendingAnimeNames();
  return {
    props: {
      trendingAnimesNames,
    },
  };
};
