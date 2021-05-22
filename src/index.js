import { fetchApiDefinition } from "./steam/api-definition-fetcher.js";

const run = async () => {
    const json = await fetchApiDefinition();

    console.log(json);
};

run();
