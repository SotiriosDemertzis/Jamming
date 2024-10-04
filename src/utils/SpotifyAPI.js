export default async function searchTrack(string) {
  const url = `https://spotify23.p.rapidapi.com/search/?q=${encodeURIComponent(string)}&type=multi&offset=0&limit=15&numberOfTopRe`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '2adeaba6afmshb93805b3429a780p19ff28jsn7297bf2bc11a',
      'x-rapidapi-host': 'spotify23.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("API response data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching data from Spotify API:", error);
    return null;
  }
}