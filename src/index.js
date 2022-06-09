import debounce from 'lodash.debounce';

import './css/styles.css';
import getRefsObject from '../src/services/refs';
import { getDataFromInput } from './services/services';
import {
  renderListOfCountries,
  renderCardOfCountry,
} from './services/templates';

const DEBOUNCE_DELAY = 300;
const refs = getRefsObject();

refs.input.addEventListener(
  'input',
  debounce(getDataFromInput, DEBOUNCE_DELAY)
);

// функція, яка додає в ДОМ розмітку списку країн
function addMarkupOfList(data) {
  const markup = renderListOfCountries(data);
  refs.countryCard.innerHTML = '';
  refs.countryList.innerHTML = '';
  refs.countryList.insertAdjacentHTML('beforeend', markup);
}

// функція, яка додає в ДОМ розмітку картки країни
function addMarkupOfCountryCard(data) {
  const markup = renderCardOfCountry(data);
  refs.countryList.innerHTML = '';
  refs.countryCard.innerHTML = '';
  refs.countryCard.insertAdjacentHTML('beforeend', markup);
}

export { addMarkupOfList, addMarkupOfCountryCard };
