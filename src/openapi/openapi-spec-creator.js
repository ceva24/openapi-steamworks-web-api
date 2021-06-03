import SwaggerParser from "@apidevtools/swagger-parser";
import {
    SPEC_SERVER_URL,
    SPEC_VERSION,
    SPEC_EXTERNAL_DOCS_URL,
    SPEC_PATHS_PARAMETERS_IN,
    SPEC_SECURITY_SCHEME_TYPE,
    SPEC_SECURITY_SCHEME_NAME,
    STEAM_API_KEY_PARAMETER,
} from "../constants/constants.js";
import { createInfo } from "./components/info/info-creator.js";
import { createPaths } from "./components/paths/paths-creator.js";
import { createTag, createTagName } from "./utils/tag-creator.js";

const createOpenApiSpec = async (apiDefinition) => {
    const openApiSpec = {
        openapi: SPEC_VERSION,
        info: createInfo(),
        servers: [{ url: SPEC_SERVER_URL }],
        paths: createPaths(apiDefinition),
        externalDocs: { url: SPEC_EXTERNAL_DOCS_URL },
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
        tags: createSortedTags(apiDefinition.apilist.interfaces),
    };

    return SwaggerParser.validate(openApiSpec);
};

const createSortedTags = (interfaces) => {
    const sortedTagNames = interfaces
        .map((apiInterface) => {
            return createTagName(apiInterface.name);
        })
        .sort();

    const uniqueTagNames = [...new Set(sortedTagNames)];

    const uniqueTags = uniqueTagNames.map((tagName) => {
        return createTag(tagName);
    });

    return uniqueTags;
};

export { createOpenApiSpec };
