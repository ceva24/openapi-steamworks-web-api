import { SPEC_VERSION } from "../constants/constants.js";
import { createInfo } from "./components/info-creator.js";
import { createPaths } from "./components/paths-creator.js";

const createOpenApiSpec = (apiDefinition) => {
    return {
        openapi: SPEC_VERSION,
        info: createInfo(),
        paths: { ...createPaths(apiDefinition) },
    };
};

export { createOpenApiSpec };
