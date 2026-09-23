interface CountryResponse {
  country?: string;
}

export const getCountry = async (signal?: AbortSignal) => {
  const response = await fetch('https://api.country.is/', { signal });

  if (!response.ok) return undefined;

  const data = (await response.json()) as CountryResponse;

  return data.country;
};
