import { createPath } from "./path-creator.js";

const createPaths = (apiDefinition) => {
    const apiInterface = apiDefinition.apilist.interfaces[0];

    const paths = apiInterface.methods.map((method) => {
        return createPath(apiInterface.name, method);
    });

    return Object.assign({}, ...paths);
};

export { createPaths };
