import { SPEC_VERSION, SPEC_INFO_TITLE } from "../constants/constants.js";
import { createOpenApiSpec } from "./openapi-spec-creator.js";

const apiDefinition = {
    apilist: {
        interfaces: [
            {
                name: "IClientStats_1046930",
                methods: [
                    {
                        name: "ReportEvent",
                        version: 1,
                        httpmethod: "GET",
                    },
                ],
            },
        ],
    },
};

describe("openapi spec creator", () => {
    it("creates the openapi spec", () => {
        const openApiSpec = createOpenApiSpec(apiDefinition);

        expect(openApiSpec).toMatchSnapshot();
    });

    it("sets the version number", () => {
        const openApiSpec = createOpenApiSpec(apiDefinition);

        expect(openApiSpec.openapi).toEqual(SPEC_VERSION);
    });

    it("creates the info", () => {
        const openApiSpec = createOpenApiSpec(apiDefinition);

        expect(openApiSpec.info.title).toEqual(SPEC_INFO_TITLE);
    });

    it("creates the paths", () => {
        const openApiSpec = createOpenApiSpec(apiDefinition);

        expect(Object.keys(openApiSpec.paths).length).toEqual(1);
    });
});
