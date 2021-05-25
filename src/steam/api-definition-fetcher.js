import fetch from "node-fetch";
import { STEAM_API_URL } from "../constants/constants.js";

const fetchApiDefinition = async () => {
    const response = await fetch(STEAM_API_URL);

    return response.json();
};

export { fetchApiDefinition };
