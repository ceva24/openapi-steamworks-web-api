import { createInfo } from "./components/info-creator.js";

const OPENAPI_SPEC_VERSION = "3.0.3";

const createOpenApiSpec = () => {
    return { openapi: OPENAPI_SPEC_VERSION, info: createInfo() };
};

export { createOpenApiSpec, OPENAPI_SPEC_VERSION };
