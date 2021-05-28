import {
    DEFAULT_RESPONSES,
    STEAM_EXTERNAL_DOCS_URL,
} from "../../../constants/constants.js";
import { createPathParameters } from "./path-parameters-creator.js";
import { createRequestBody } from "./path-request-body-creator.js";

const createPath = (interfaceName, method) => {
    const key = `/${interfaceName}/${method.name}/v${method.version}`;

    const httpMethod = method.httpmethod.toLowerCase();

    const operation = {
        [httpMethod]: {
            responses: DEFAULT_RESPONSES,
            parameters: interfaceName.toLowerCase().includes("service")
                ? []
                : createPathParameters(httpMethod, method.parameters),
            externalDocs: {
                url: `${STEAM_EXTERNAL_DOCS_URL}/${interfaceName}#${method.name}`,
            },
            tags: [interfaceName.split("_")[0]],
        },
    };

    const requestBody = createRequestBody(httpMethod, method.parameters);
    if (requestBody)
        operation[Object.keys(operation)[0]].requestBody = requestBody;

    return { [key]: operation };
};

export { createPath };
