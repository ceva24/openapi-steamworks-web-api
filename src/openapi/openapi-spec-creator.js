import { SPEC_VERSION } from "../constants/constants.js";
import { createInfo } from "./components/info-creator.js";

const createOpenApiSpec = () => {
    return { openapi: SPEC_VERSION, info: createInfo(), paths: {} };
};

export { createOpenApiSpec };
