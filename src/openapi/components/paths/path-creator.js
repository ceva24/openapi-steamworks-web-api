import {
    DEFAULT_RESPONSES,
    STEAM_EXTERNAL_DOCS_URL,
} from "../../../constants/constants.js";
import { createPathParameters } from "./path-parameters-creator.js";

const createPath = (interfaceName, method) => {
    const key = `/${interfaceName}/${method.name}/v${method.version}`;

    const httpMethodName = method.httpmethod.toLowerCase();

    const value = {
        [httpMethodName]: {
            responses: DEFAULT_RESPONSES,
            parameters:
                httpMethodName === "get" &&
                !interfaceName.toLowerCase().includes("service")
                    ? createPathParameters(method.parameters)
                    : [],
            externalDocs: {
                url: `${STEAM_EXTERNAL_DOCS_URL}/${interfaceName}#${method.name}`,
            },
            tags: [interfaceName.split("_")[0]],
        },
    };

    return { [key]: value };
};

export { createPath };
