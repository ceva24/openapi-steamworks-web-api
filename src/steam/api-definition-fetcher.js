import fetch from "node-fetch";
import { STEAM_API_URL } from "../constants/constants.js";

const fetchApiDefinition = async () => {
    const response = await fetch(STEAM_API_URL);
    const json = await response.json();

    return json;
};

export { fetchApiDefinition };
