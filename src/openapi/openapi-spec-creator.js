import { SPEC_VERSION } from "../constants/constants.js";
import { createInfo } from "./components/info/info-creator.js";
import { createPaths } from "./components/paths/paths-creator.js";

const createOpenApiSpec = (apiDefinition) => {
    return {
        openapi: SPEC_VERSION,
        info: createInfo(),
        paths: { ...createPaths(apiDefinition) },
    };
};

export { createOpenApiSpec };
