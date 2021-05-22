import { fetchApiDefinition } from "./steam/api-definition-fetcher.js";

const buildOpenApiSpec = async () => {
    const json = await fetchApiDefinition();

    console.log(json);
};

buildOpenApiSpec();
