import SwaggerParser from "@apidevtools/swagger-parser";
import { SPEC_VERSION } from "../constants/constants.js";
import { createInfo } from "./components/info/info-creator.js";
import { createPaths } from "./components/paths/paths-creator.js";

const createOpenApiSpec = async (apiDefinition) => {
    const openApiSpec = {
        openapi: SPEC_VERSION,
        info: createInfo(),
        paths: createPaths(apiDefinition),
    };

    return SwaggerParser.validate(openApiSpec);
};

export { createOpenApiSpec };
