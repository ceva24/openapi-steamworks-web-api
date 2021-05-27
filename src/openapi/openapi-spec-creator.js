import SwaggerParser from "@apidevtools/swagger-parser";
import {
    SPEC_SERVER_URL,
    SPEC_VERSION,
    SPEC_EXTERNAL_DOCS_URL,
} from "../constants/constants.js";
import { createInfo } from "./components/info/info-creator.js";
import { createPaths } from "./components/paths/paths-creator.js";

const createOpenApiSpec = async (apiDefinition) => {
    const openApiSpec = {
        openapi: SPEC_VERSION,
        info: createInfo(),
        servers: [{ url: SPEC_SERVER_URL }],
        paths: createPaths(apiDefinition),
        externalDocs: { url: SPEC_EXTERNAL_DOCS_URL },
    };

    return SwaggerParser.validate(openApiSpec);
};

export { createOpenApiSpec };
