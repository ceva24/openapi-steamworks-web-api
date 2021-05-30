import { SPEC_PATHS_PARAMETERS_IN } from "../../../constants/constants.js";
import { createPropertySchema } from "../../utils/property-schema-creator.js";

const createPathParameters = (httpMethod, parameters) => {
    if (httpMethod !== "get") return [];

    return parameters.map((parameter) => {
        return {
            name: parameter.name,
            in: SPEC_PATHS_PARAMETERS_IN,
            description: parameter.description || "",
            required: !parameter.optional,
            schema: createPropertySchema(parameter.type),
        };
    });
};

export { createPathParameters };
