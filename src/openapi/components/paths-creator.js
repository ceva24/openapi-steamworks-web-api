import { createPath } from "./path-creator.js";

const createPaths = (apiDefinition) => {
    const apiInterface = apiDefinition.apilist.interfaces[0];
    return { ...createPath(apiInterface.name, apiInterface.methods[0]) };
};

export { createPaths };
