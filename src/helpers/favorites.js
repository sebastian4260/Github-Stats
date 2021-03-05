const getFavorite = (favorites, data) =>
  favorites.find((favorite) => favorite.id === data.id);

const toggleFavorite = (favorites, data, setFavorites) => {
  let newFavorites;
  const favorite = getFavorite(favorites, data);
  if (favorite) {
    newFavorites = favorites.filter(
      (_favorite) => _favorite.id !== favorite.id
    );
  } else {
    newFavorites = [...favorites, data];
  }
  setFavorites(newFavorites);
};

export { getFavorite, toggleFavorite };
