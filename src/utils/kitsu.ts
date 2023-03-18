export const fetchTrendingAnimes = async () => {
  const response = await fetch(
    `https://kitsu.io/api/edge/trending/anime?limit=10`
  );
  const animes = await response.json();
  return animes;
};

export const fetchTrendingAnimeNames = async () => {
  const animes = await fetchTrendingAnimes();
  const names = animes.data.map(
    (anime: { attributes: { titles: any; canonicalTitle: any } }) =>
      anime.attributes.titles.en
        ? anime.attributes.titles.en
        : anime.attributes.canonicalTitle
  );
  return names;
};
