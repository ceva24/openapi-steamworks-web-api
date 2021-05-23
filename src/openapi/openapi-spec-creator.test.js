import { SPEC_VERSION, SPEC_INFO_TITLE } from "../constants/constants.js";
import { createOpenApiSpec } from "./openapi-spec-creator.js";

describe("openapi spec creator", () => {
    it("creates the openapi spec", () => {
        const openApiSpec = createOpenApiSpec();

        expect(openApiSpec).toMatchSnapshot();
    });

    it("sets the version number", () => {
        const openApiSpec = createOpenApiSpec();

        expect(openApiSpec.openapi).toEqual(SPEC_VERSION);
    });

    it("creates the info", () => {
        const openApiSpec = createOpenApiSpec();

        expect(openApiSpec.info.title).toEqual(SPEC_INFO_TITLE);
    });
});
