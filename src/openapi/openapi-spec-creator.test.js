import {
    SPEC_VERSION,
    SPEC_EXTERNAL_DOCS_URL,
    SPEC_INFO_TITLE,
    SPEC_SERVER_URL,
} from "../constants/constants.js";
import { createOpenApiSpec } from "./openapi-spec-creator.js";

describe("openapi spec creator", () => {
    it("creates the openapi spec", async () => {
        const apiDefinition = {
            apilist: {
                interfaces: [
                    {
                        name: "IGCVersion_1046930",
                        methods: [
                            {
                                name: "GetClientVersion",
                                version: 1,
                                httpmethod: "GET",
                                parameters: [],
                            },
                            {
                                name: "GetServerVersion",
                                version: 1,
                                httpmethod: "GET",
                                parameters: [],
                            },
                        ],
                    },
                    {
                        name: "IGCVersion_1269260",
                        methods: [
                            {
                                name: "GetClientVersion",
                                version: 1,
                                httpmethod: "GET",
                                parameters: [],
                            },
                            {
                                name: "GetServerVersion",
                                version: 1,
                                httpmethod: "GET",
                                parameters: [],
                            },
                        ],
                    },
                    {
                        name: "IPortal2Leaderboards_620",
                        methods: [
                            {
                                name: "GetBucketizedData",
                                version: 1,
                                httpmethod: "GET",
                                parameters: [
                                    {
                                        name: "leaderboardName",
                                        type: "string",
                                        optional: false,
                                        description:
                                            "The leaderboard name to fetch data for.",
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        };

        const openApiSpec = await createOpenApiSpec(apiDefinition);

        expect(openApiSpec).toMatchSnapshot();
    });

    it("sets the version number", async () => {
        const apiDefinition = { apilist: { interfaces: [] } };

        const openApiSpec = await createOpenApiSpec(apiDefinition);

        expect(openApiSpec.openapi).toEqual(SPEC_VERSION);
    });

    it("creates the info", async () => {
        const apiDefinition = { apilist: { interfaces: [] } };

        const openApiSpec = await createOpenApiSpec(apiDefinition);

        expect(openApiSpec.info.title).toEqual(SPEC_INFO_TITLE);
    });

    it("creates the servers", async () => {
        const apiDefinition = { apilist: { interfaces: [] } };

        const openApiSpec = await createOpenApiSpec(apiDefinition);

        expect(openApiSpec.servers.length).toEqual(1);
        expect(openApiSpec.servers[0].url).toEqual(SPEC_SERVER_URL);
    });

    it("creates the paths", async () => {
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
                                parameters: [],
                            },
                        ],
                    },
                ],
            },
        };

        const openApiSpec = await createOpenApiSpec(apiDefinition);

        expect(Object.keys(openApiSpec.paths).length).toEqual(1);
    });

    it("creates the external docs", async () => {
        const apiDefinition = { apilist: { interfaces: [] } };

        const openApiSpec = await createOpenApiSpec(apiDefinition);

        expect(openApiSpec.externalDocs.url).toEqual(SPEC_EXTERNAL_DOCS_URL);
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
                                parameters: [],
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
