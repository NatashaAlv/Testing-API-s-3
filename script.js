// const fetch = require("node-fetch");

const API_KEY = "A9981EC12B7CACD5C23F932029A78B16";
const STEAM_ID = "1007777769"; // Example ID

// async function getPlayerSummary() {
  const url = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${API_KEY}&steamids=${STEAM_ID}`;
  // const res = await fetch(url);
  // const data = await res.json();
  // console.log(data.response.players[0]);
  fetch(url)
  .then(res => res.json())
  .then(data => console.log(data.data))
  .catch(console.error);
// }

// getPlayerSummary();
