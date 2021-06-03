import SwaggerParser from "@apidevtools/swagger-parser";
import {
    SPEC_SERVER_URL,
    SPEC_VERSION,
    SPEC_EXTERNAL_DOCS_URL,
    SPEC_PATHS_PARAMETERS_IN,
    SPEC_SECURITY_SCHEME_TYPE,
    SPEC_SECURITY_SCHEME_NAME,
    STEAM_API_KEY_PARAMETER,
    SPEC_PARTNER_SERVER_URL,
    SPEC_EXTERNAL_DOCS_DESCRIPTION,
} from "../constants/constants.js";
import { createInfo } from "./components/info/info-creator.js";
import { createPaths } from "./components/paths/paths-creator.js";

const createOpenApiSpec = async (apiDefinition) => {
    const openApiSpec = {
        openapi: SPEC_VERSION,
        info: createInfo(),
        servers: [{ url: SPEC_SERVER_URL }, { url: SPEC_PARTNER_SERVER_URL }],
        paths: createPaths(apiDefinition),
        externalDocs: {
            url: SPEC_EXTERNAL_DOCS_URL,
            description: SPEC_EXTERNAL_DOCS_DESCRIPTION,
        },
        security: [{ [SPEC_SECURITY_SCHEME_NAME]: [] }],
        components: {
            securitySchemes: {
                [SPEC_SECURITY_SCHEME_NAME]: {
                    type: SPEC_SECURITY_SCHEME_TYPE,
                    name: STEAM_API_KEY_PARAMETER,
                    in: SPEC_PATHS_PARAMETERS_IN,
                },
            },
        },
    };

    return SwaggerParser.validate(openApiSpec);
};

export { createOpenApiSpec };
