import {
    createOpenApiSpec,
    OPENAPI_SPEC_VERSION,
} from "./openapi-spec-creator.js";

import { API_TITLE } from "./components/info-creator.js";

describe("openapi spec creator", () => {
    it("sets the version number", () => {
        const openApiSpec = createOpenApiSpec();

        expect(openApiSpec.openapi).toEqual(OPENAPI_SPEC_VERSION);
    });

    it("creates the info", () => {
        const openApiSpec = createOpenApiSpec();

        expect(openApiSpec.info.title).toEqual(API_TITLE);
    });
});
