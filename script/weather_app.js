function getWeatherData(place) {
  const weatherData = [
    {
      location: "kolkata",
      lat: "22",
      lng: "12",
      humidity: "93",
      presure: "1005",
      wind: "5",
      temp: "10"
    },
    {
      location: "mumbai",
      lat: "24",
      lng: "16",
      humidity: "84",
      presure: "985",
      wind: "7",
      temp: "12"
    },
    {
      location: "delhi",
      lat: "10",
      lng: "12",
      humidity: "103",
      presure: "1105",
      wind: "2",
      temp: "16"
    },
    {
      location: "chennai",
      lat: "18",
      lng: "15",
      humidity: "73",
      presure: "805",
      wind: "10",
      temp: "17"
    },
    {
      location: "kochi",
      lat: "32",
      lng: "42",
      humidity: "93",
      presure: "1005",
      wind: "5",
      temp: "18"
    },
    {
      location: "bengaluru",
      lat: "22",
      lng: "12",
      humidity: "93",
      presure: "1005",
      wind: "5",
      temp: "19"
    },
    {
      location: "ahmedabad",
      lat: "22",
      lng: "12",
      humidity: "93",
      presure: "1005",
      wind: "5",
      temp: "20"
    },
    {
      location: "noida",
      lat: "22",
      lng: "12",
      humidity: "93",
      presure: "1005",
      wind: "5",
      temp: "21"
    },
  ];
  const result = weatherData.find(function (e) {
    if (e.location == place) return e;
  });
  console.log(`Weather data of ${place} is`)
  console.log(result);
}
const place = process.argv[2];
getWeatherData(place);

