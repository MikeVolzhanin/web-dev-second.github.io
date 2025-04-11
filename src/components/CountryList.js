export function renderCountryList(countries, onClick) {
  const container = document.getElementById('country-list');
  container.innerHTML = '<h2>Список стран</h2>';
  const ul = document.createElement('ul');

  countries.forEach((country) => {
    const li = document.createElement('li');
    li.textContent = country.name;
    li.style.cursor = 'pointer';

    li.addEventListener('click', () => onClick(country.alpha3Code));

    ul.appendChild(li);
  });

  container.appendChild(ul);
}

  