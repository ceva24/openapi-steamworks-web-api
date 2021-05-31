import {
    SPEC_PATHS_PARAMETERS_IN,
    SPEC_PATHS_PARAMETERS_INPUT_JSON,
    SPEC_PATHS_PARAMETERS_INPUT_JSON_DESCRIPTION,
    STEAM_PARAMETER_TYPES,
} from "../../../constants/constants.js";
import { createPropertySchema } from "../../utils/property-schema-creator.js";
import { isServiceInterface } from "../../utils/service-interface-checker.js";

const createPathParameters = (interfaceName, httpMethod, steamParameters) => {
    const parameters = [];

    if (httpMethod === "get") {
        parameters.push(
            ...steamParameters.map((parameter) => {
                return {
                    name: parameter.name,
                    in: SPEC_PATHS_PARAMETERS_IN,
                    description: parameter.description || "",
                    required: !parameter.optional,
                    schema: createPropertySchema(parameter.type),
                };
            })
        );
    }

    if (isServiceInterface(interfaceName))
        parameters.push(createInputJsonParameter());

    return parameters;
};

const createInputJsonParameter = () => {
    return {
        name: SPEC_PATHS_PARAMETERS_INPUT_JSON,
        in: SPEC_PATHS_PARAMETERS_IN,
        description: SPEC_PATHS_PARAMETERS_INPUT_JSON_DESCRIPTION,
        required: false,
        schema: createPropertySchema(STEAM_PARAMETER_TYPES.STRING, null),
    };
};

export { createPathParameters };
