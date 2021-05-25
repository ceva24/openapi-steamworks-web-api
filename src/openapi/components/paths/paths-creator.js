import { createPath } from "./path-creator.js";

const createPaths = (apiDefinition) => {
    const apiInterfaces = apiDefinition.apilist.interfaces;

    const paths = apiInterfaces.map((apiInterface) => {
        return apiInterface.methods.map((method) => {
            return createPath(apiInterface.name, method);
        });
    });

    return Object.assign({}, ...paths.flat(1));
};

export { createPaths };
