import {
    SPEC_PATHS_FIELD_ARRAY_PARAMETER_DESCRIPTION,
    SPEC_PATHS_FIELD_OPTIONAL_TEXT,
    SPEC_PATHS_FIELD_REQUIRED_TEXT,
} from "../../constants/constants.js";
import { isServiceInterface } from "./service-interface-checker.js";

const createParameterDescription = (interfaceName, parameter) => {
    const serviceInterfacedescription = getDescriptionForServiceInterface(
        interfaceName,
        parameter
    );

    return getDescriptionForArrayParameter(
        parameter.name,
        serviceInterfacedescription
    );
};

const getDescriptionForServiceInterface = (interfaceName, parameter) => {
    if (
        !isServiceInterface(interfaceName) ||
        parameter.optional ||
        (parameter.description &&
            parameter.description.startsWith(SPEC_PATHS_FIELD_OPTIONAL_TEXT))
    )
        return parameter.description;

    /*
     * Add a hint to the description that the parameter is required for service interfaces,
     * as we're explicitly removing the required property due to the alternative input_json
     * query parameter.
     */
    return parameter.description
        ? `${SPEC_PATHS_FIELD_REQUIRED_TEXT} ${parameter.description}`
        : SPEC_PATHS_FIELD_REQUIRED_TEXT;
};

const getDescriptionForArrayParameter = (name, description) => {
    return name.endsWith("[0]")
        ? `${description}${SPEC_PATHS_FIELD_ARRAY_PARAMETER_DESCRIPTION}`
        : description;
};

export { createParameterDescription };
