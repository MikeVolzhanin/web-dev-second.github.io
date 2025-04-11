import { fetchAllCountries, fetchCountryByCode} from './api/countriesApi.js';
import { renderCountryList } from './components/CountryList.js';
import { renderCountryDetail } from './components/CountryDetail.js';

const countryListEl = document.getElementById('country-list');
const countryDetailEl = document.getElementById('country-detail');

async function onCountryClick(code) {
  const country = await fetchCountryByCode(code);
  if (country) {
    renderCountryDetail(country);
  }
}

async function init() {
  const countries = await fetchAllCountries();
  renderCountryList(countries, onCountryClick);

  countryDetailEl.innerHTML = `
    <div style="text-align: center; color: #999; margin-top: 100px;">
      <img src="https://cdn-icons-png.flaticon.com/512/744/744922.png" width="80" alt="Globe Icon" style="opacity: 0.5;" />
      <p style="font-size: 1.2rem; margin-top: 10px;">Выберите страну, чтобы увидеть подробности</p>
    </div>
  `;
}


init();