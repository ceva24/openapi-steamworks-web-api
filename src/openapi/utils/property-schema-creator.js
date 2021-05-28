import {
    SPEC_FORMATS,
    SPEC_TYPES,
    STEAM_PARAMETER_TYPES,
} from "../../constants/constants.js";

const createPropertySchema = (steamType) => {
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

export { createPropertySchema };
