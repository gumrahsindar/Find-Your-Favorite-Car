export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': 'dac18cc245msh6f3c5b7cd6cd079p1b4d3fjsna786c17751d5',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  }
  const response = await fetch(
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
    {
      headers: headers,
    }
  )
  const result = await response.json()
  return result
}
