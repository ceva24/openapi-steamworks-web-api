import { SPEC_INFO_TITLE } from "../../constants/constants.js";

const createInfo = () => {
    return { title: SPEC_INFO_TITLE, version: process.env.npm_package_version };
};

export { createInfo };
