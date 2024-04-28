export const CharactersDataAPI = () => {
  return fetch('https://rickandmortyapi.com/api/character/')
    .then((response) => response.json())
    .then((data) => data.results)
    .catch((error) => console.log(error));
};
