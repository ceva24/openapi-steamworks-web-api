import "./setup-dotenv.js";
import parseArgs from "minimist";
import { fetchApiDefinition } from "./steam/api-definition-fetcher.js";
import { createOpenApiSpec } from "./openapi/openapi-spec-creator.js";
import { writeOpenApiSpec } from "./file/spec-writer.js";

const run = async () => {
    const apiKey = parseArgs(process.argv.slice(2)).key;

    console.log("Starting");

    console.log("Fetching Steamworks Web API definition...");
    const apiDefinition = await fetchApiDefinition(apiKey);

    console.log("Creating OpenAPI spec...");
    const openApiSpec = await createOpenApiSpec(apiDefinition);

    console.log("Writing to output file...");
    writeOpenApiSpec(openApiSpec);

    console.log("Complete");
};

run();
