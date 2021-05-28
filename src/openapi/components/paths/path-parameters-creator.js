import {
    SPEC_FORMATS,
    SPEC_PATHS_PARAMETERS_IN,
    SPEC_TYPES,
    STEAM_PARAMETER_TYPES,
} from "../../../constants/constants.js";

const createPathParameters = (parameters) => {
    return parameters.map((parameter) => {
        return {
            name: parameter.name,
            in: SPEC_PATHS_PARAMETERS_IN,
            description: parameter.description,
            required: !parameter.optional,
            schema: createSchema(parameter.type),
        };
    });
};

const createSchema = (steamType) => {
    switch (steamType) {
        case STEAM_PARAMETER_TYPES.UINT64:
            return { type: SPEC_TYPES.INTEGER, format: SPEC_FORMATS.INT64 };
        case STEAM_PARAMETER_TYPES.UINT32:
            return { type: SPEC_TYPES.INTEGER, format: SPEC_FORMATS.INT32 };
        case STEAM_PARAMETER_TYPES.INT32:
            return { type: SPEC_TYPES.INTEGER, format: SPEC_FORMATS.INT32 };
        case STEAM_PARAMETER_TYPES.RAWBINARY:
            return { type: SPEC_TYPES.STRING, format: SPEC_FORMATS.BINARY };
        default:
            return { type: SPEC_TYPES.STRING };
    }
};

export { createPathParameters };
