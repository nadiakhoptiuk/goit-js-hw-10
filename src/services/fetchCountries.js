const options = `?fields=name,capital,population,flags,languages`;
const url = 'https://restcountries.com/v3.1/name/';

// функція, яка забирає дані з бекенду
function fetchCountries(name) {
  return fetch(`${url}${name}${options}`).then(response => {
    if (!response.ok) {
      throw new Error('Oops, there is no country with that name');
    }
    return response.json();
  });
}

export { fetchCountries };
