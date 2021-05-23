import "./setup-dotenv.js";
import { fetchApiDefinition } from "./steam/api-definition-fetcher.js";
import { createOpenApiSpec } from "./openapi/openapi-spec-creator.js";
import { writeOpenApiSpec } from "./file/spec-writer.js";

const run = async () => {
    console.log("Starting");

    console.log("Fetching Steamworks Web API definition...");
    await fetchApiDefinition();

    console.log("Creating OpenAPI spec...");
    const openApiSpec = createOpenApiSpec();

    console.log("Writing to output file...");
    writeOpenApiSpec(openApiSpec);

    console.log("Complete");
};

run();
