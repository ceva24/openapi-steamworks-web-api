import {
    SPEC_PATHS_REQUEST_BODY_OPTIONAL_TEXT,
    SPEC_PATHS_REQUEST_BODY_REQUIRED_TEXT,
} from "../../constants/constants.js";
import { isServiceInterface } from "./service-interface-checker.js";

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

export { createParameterDescription };
