import {
    createOpenApiSpec,
    OPENAPI_SPEC_VERSION,
} from "./openapi-spec-creator.js";

describe("openapi spec creator", () => {
    it("sets the version number", () => {
        const openApiSpec = createOpenApiSpec();

        expect(openApiSpec.openapi).toEqual(OPENAPI_SPEC_VERSION);
    });
});
