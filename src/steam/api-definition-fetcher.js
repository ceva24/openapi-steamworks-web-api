import fetch from "node-fetch";

const STEAM_API_URL =
    "https://api.steampowered.com/ISteamWebAPIUtil/GetSupportedAPIList/v1/";

const fetchApiDefinition = async () => {
    const response = await fetch(STEAM_API_URL);
    const json = await response.json();

    return json;
};

export { fetchApiDefinition, STEAM_API_URL };
