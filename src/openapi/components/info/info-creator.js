import {
    SPEC_INFO_DESCRIPTION,
    SPEC_INFO_TERMS_OF_SERVICE_URL,
    SPEC_INFO_TITLE,
} from "../../../constants/constants.js";

const createInfo = () => {
    return {
        title: SPEC_INFO_TITLE,
        version: process.env.npm_package_version,
        description: SPEC_INFO_DESCRIPTION,
        termsOfService: SPEC_INFO_TERMS_OF_SERVICE_URL,
    };
};

export { createInfo };
