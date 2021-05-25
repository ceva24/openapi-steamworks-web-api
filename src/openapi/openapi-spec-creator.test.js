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
                        httpmethod: "POST",
                    },
                ],
            },
        ],
    },
};

describe("openapi spec creator", () => {
    it("creates the openapi spec", async () => {
        const openApiSpec = await createOpenApiSpec(apiDefinition);

        expect(openApiSpec).toMatchSnapshot();
    });

    it("sets the version number", async () => {
        const openApiSpec = await createOpenApiSpec(apiDefinition);

        expect(openApiSpec.openapi).toEqual(SPEC_VERSION);
    });

    it("creates the info", async () => {
        const openApiSpec = await createOpenApiSpec(apiDefinition);

        expect(openApiSpec.info.title).toEqual(SPEC_INFO_TITLE);
    });

    it("creates the paths", async () => {
        const openApiSpec = await createOpenApiSpec(apiDefinition);

        expect(Object.keys(openApiSpec.paths).length).toEqual(1);
    });

    it("validates the openapi spec", async () => {
        const invalidApiDefinition = {
            apilist: {
                interfaces: [
                    {
                        name: "IClientStats_1046930",
                        methods: [
                            {
                                name: "ReportEvent",
                                version: 1,
                                httpmethod: "",
                            },
                        ],
                    },
                ],
            },
        };

        let thrown;
        try {
            await createOpenApiSpec(invalidApiDefinition);
        } catch (error) {
            thrown = error;
        }

        expect(thrown.message).toContain("Swagger schema validation failed");
    });
});
