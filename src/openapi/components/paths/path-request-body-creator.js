import {
    SPEC_PATHS_REQUEST_BODY_CONTENT_TYPE,
    SPEC_PATHS_REQUEST_BODY_OPTIONAL_TEXT,
    SPEC_PATHS_REQUEST_BODY_REQUIRED_TEXT,
} from "../../../constants/constants.js";
import { createPropertySchema } from "../../utils/property-schema-creator.js";
import { isServiceInterface } from "../../utils/service-interface-checker.js";

const createRequestBody = (interfaceName, httpMethod, parameters) => {
    if (httpMethod !== "post" || parameters.length === 0) return null;

    return {
        content: {
            [SPEC_PATHS_REQUEST_BODY_CONTENT_TYPE]: {
                schema: createSchema(interfaceName, parameters),
            },
        },
    };
};

const createSchema = (interfaceName, parameters) => {
    const schema = {
        type: "object",
        properties: Object.assign(
            {},
            ...parameters.map((parameter) => {
                return {
                    [parameter.name]: createPropertySchema(
                        parameter.type,
                        createParameterDescription(interfaceName, parameter)
                    ),
                };
            })
        ),
    };

    /*
     * Service interfaces have an alternative way to post data via the input_json query parameter,
     * so the request body fields aren't required.
     */
    if (!isServiceInterface(interfaceName)) {
        const requiredParameters = parameters.filter((parameter) => {
            return !parameter.optional;
        });

        if (requiredParameters.length > 0) {
            schema.required = createRequired(requiredParameters);
        }
    }

    return schema;
};

const createParameterDescription = (interfaceName, parameter) => {
    if (
        !isServiceInterface(interfaceName) ||
        parameter.optional ||
        (parameter.description &&
            parameter.description.startsWith(
                SPEC_PATHS_REQUEST_BODY_OPTIONAL_TEXT
            ))
    )
        return parameter.description;

    /*
     * Add a hint to the description that the parameter is required for service interfaces,
     * as we're explicitly removing the required property due to the alternative input_json
     * query parameter.
     */
    return parameter.description
        ? `${SPEC_PATHS_REQUEST_BODY_REQUIRED_TEXT} ${parameter.description}`
        : SPEC_PATHS_REQUEST_BODY_REQUIRED_TEXT;
};

const createRequired = (parameters) => {
    return parameters.map((parameter) => {
        return parameter.name;
    });
};

export { createRequestBody };
