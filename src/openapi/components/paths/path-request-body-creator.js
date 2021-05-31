import { SPEC_PATHS_REQUEST_BODY_CONTENT_TYPE } from "../../../constants/constants.js";
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
                        parameter.description
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

const createRequired = (parameters) => {
    return parameters.map((parameter) => {
        return parameter.name;
    });
};

export { createRequestBody };
