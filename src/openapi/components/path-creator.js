import { DEFAULT_RESPONSES } from "../../constants/constants.js";

const createPath = (interfaceName, method) => {
    const key = `/${interfaceName}/${method.name}/v${method.version}`;
    const value = {
        [method.httpmethod.toLowerCase()]: { responses: DEFAULT_RESPONSES },
    };

    return { [key]: value };
};

export { createPath };
