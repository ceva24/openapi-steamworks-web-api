import fetch from "node-fetch";
import {
    STEAM_API_LIST_URL,
    STEAM_API_KEY_PARAMETER,
} from "../constants/constants.js";

const fetchApiDefinition = async (apiKey) => {
    const url = apiKey
        ? `${STEAM_API_LIST_URL}?${STEAM_API_KEY_PARAMETER}=${apiKey}`
        : STEAM_API_LIST_URL;

    const response = await fetch(url);

    return response.json();
};

export { fetchApiDefinition };
