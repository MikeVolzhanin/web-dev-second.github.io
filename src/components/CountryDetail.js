export function renderCountryDetail(country) {
  const container = document.getElementById('country-detail');
  console.log(country)
  container.innerHTML = `
    <h2>Информация о стране</h2>
    <p><strong>Название:</strong> ${country.name}</p>
    <p><strong>Столица:</strong> ${country.capital || 'Неизвестно'}</p>
    <p><strong>Регион:</strong> ${country.region}</p>
    <p><strong>Население:</strong> ${country.population.toLocaleString()}</p>
    <img src="${country.flag}" alt="Флаг ${country.name}" width="200">
  `;
}

