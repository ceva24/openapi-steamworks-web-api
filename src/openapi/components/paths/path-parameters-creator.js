import {
    FORMAT_PARAMETER,
    SPEC_PATHS_PARAMETERS_IN,
    SPEC_PATHS_PARAMETERS_INPUT_JSON,
    SPEC_PATHS_PARAMETERS_INPUT_JSON_GET_DESCRIPTION,
    SPEC_PATHS_PARAMETERS_INPUT_JSON_POST_DESCRIPTION,
    STEAM_PARAMETER_TYPES,
} from "../../../constants/constants.js";
import { createParameterDescription } from "../../utils/parameter-description-creator.js";
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
                    description:
                        createParameterDescription(interfaceName, parameter) ||
                        "",
                    required:
                        !isServiceInterface(interfaceName) &&
                        !parameter.optional,
                    schema: createPropertySchema(parameter.type, null),
                };
            })
        );
    }

    if (isServiceInterface(interfaceName))
        parameters.push(createInputJsonParameter(httpMethod));

    parameters.push(FORMAT_PARAMETER);

    return parameters;
};

const createInputJsonParameter = (httpMethod) => {
    return {
        name: SPEC_PATHS_PARAMETERS_INPUT_JSON,
        in: SPEC_PATHS_PARAMETERS_IN,
        description:
            httpMethod === "get"
                ? SPEC_PATHS_PARAMETERS_INPUT_JSON_GET_DESCRIPTION
                : SPEC_PATHS_PARAMETERS_INPUT_JSON_POST_DESCRIPTION,
        required: false,
        schema: createPropertySchema(STEAM_PARAMETER_TYPES.STRING, null),
    };
};

export { createPathParameters };
