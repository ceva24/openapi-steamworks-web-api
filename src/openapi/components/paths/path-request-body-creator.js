import { SPEC_PATHS_REQUEST_BODY_CONTENT_TYPE } from "../../../constants/constants.js";
import { createPropertySchema } from "../../utils/property-schema-creator.js";

const createRequestBody = (interfaceName, httpMethod, parameters) => {
    if (httpMethod !== "post" || parameters.length === 0) return null;

    return {
        content: {
            [SPEC_PATHS_REQUEST_BODY_CONTENT_TYPE]: {
                schema: createSchema(parameters),
            },
        },
    };
};

const createSchema = (parameters) => {
    const schema = {
        type: "object",
        properties: Object.assign(
            {},
            ...parameters.map((parameter) => {
                return { [parameter.name]: createPropertySchema(parameter) };
            })
        ),
    };

    const required = createRequired(parameters);
    if (required.length > 0) schema.required = required;

    return schema;
};

const createRequired = (parameters) => {
    return parameters
        .filter((parameter) => {
            return !parameter.optional;
        })
        .map((parameter) => {
            return parameter.name;
        });
};

export { createRequestBody };
