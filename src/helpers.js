const cleanRandomMovie = (starWarsData) => {
  const filmInfo = {
    summary: starWarsData.opening_crawl,
    title: starWarsData.title,
    releaseDate: starWarsData.release_date
  };
  return filmInfo;
};

export { cleanRandomMovie };