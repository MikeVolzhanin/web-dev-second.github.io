const BASE_URL = 'https://restcountries.com/v2';

export async function fetchAllCountries() {
  const res = await fetch(`${BASE_URL}/all`);
  const data = await res.json();
  return data;
}

export async function fetchCountryByCode(code) {
  try {
    const response = await fetch(`${BASE_URL}/alpha/${code}`);
    const data = await response.json();

    console.log(data); 

    if (data && data.name) {
      return data; 
    } else {
      console.error("Страна не найдена");
      return null;
    }
  } catch (error) {
    console.error("Ошибка при запросе данных о стране:", error);
    return null;
  }
}



