import {
    SPEC_FORMATS,
    SPEC_TYPES,
    STEAM_PARAMETER_TYPES,
} from "../../constants/constants.js";

const createPropertySchema = (steamType, description) => {
    let schema;

    switch (steamType) {
        case STEAM_PARAMETER_TYPES.UINT64:
            schema = { type: SPEC_TYPES.INTEGER, format: SPEC_FORMATS.INT64 };
            break;
        case STEAM_PARAMETER_TYPES.UINT32:
            schema = { type: SPEC_TYPES.INTEGER, format: SPEC_FORMATS.INT32 };
            break;
        case STEAM_PARAMETER_TYPES.INT32:
            schema = { type: SPEC_TYPES.INTEGER, format: SPEC_FORMATS.INT32 };
            break;
        case STEAM_PARAMETER_TYPES.RAWBINARY:
            schema = { type: SPEC_TYPES.STRING, format: SPEC_FORMATS.BINARY };
            break;
        case STEAM_PARAMETER_TYPES.STRING:
            schema = { type: SPEC_TYPES.STRING };
            break;
        case STEAM_PARAMETER_TYPES.MESSAGE:
            schema = { type: SPEC_TYPES.STRING, format: SPEC_FORMATS.MESSAGE };
            break;
        case STEAM_PARAMETER_TYPES.BOOL:
            schema = { type: SPEC_TYPES.BOOLEAN };
            break;
        default:
            throw new Error(`Unknown Steam parameter type '${steamType}'`);
    }

    if (description) schema.description = description;

    return schema;
};

export { createPropertySchema };
