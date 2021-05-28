import { SPEC_PATHS_REQUEST_BODY_CONTENT_TYPE } from "../../../constants/constants.js";

const createRequestBody = (httpMethod) => {
    if (httpMethod !== "post") return null;

    return {
        content: {
            [SPEC_PATHS_REQUEST_BODY_CONTENT_TYPE]: {
                schema: { type: "object" },
            },
        },
    };
};

export { createRequestBody };
