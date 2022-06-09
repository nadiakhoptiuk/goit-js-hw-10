import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { fetchCountries } from './fetchCountries';
import { addMarkupOfList, addMarkupOfCountryCard } from '../index';
import getRefsObject from './refs';

const refs = getRefsObject();

// функція, яка спрацьовує при введенні у форму даних - забирає дані
function getDataFromInput(ev) {
  refs.countryCard.innerHTML = '';
  refs.countryList.innerHTML = '';
  const value = ev.target.value.trim();

  if (!value) {
    return;
  }

  fetchCountries(value).then(onSuccessInput).catch(onErrorInput);
}

// функція, яка викликається при успішному фетчі
function onSuccessInput(responseData) {
  isSpecificInput(responseData);
}

// функція, яка викликається при помилці
function onErrorInput(data) {
  Notiflix.Notify.failure(data.message);
}

// функція, яка перевіряє специфічність введених даних
function isSpecificInput(data) {
  if (data.length > 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
    return;
  } else if (2 <= data.length && data.length <= 10) {
    return addMarkupOfList(data);
  } else if ((data.length = 1)) {
    return addMarkupOfCountryCard(data);
  }
}

export { getDataFromInput };
