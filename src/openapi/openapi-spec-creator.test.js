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
                    {
                        name: "IContentServerDirectoryService",
                        methods: [
                            {
                                name: "GetServersForSteamPipe",
                                version: 1,
                                httpmethod: "GET",
                                parameters: [
                                    {
                                        name: "cell_id",
                                        type: "uint32",
                                        optional: false,
                                        description: "client Cell ID",
                                    },
                                    {
                                        name: "max_servers",
                                        type: "uint32",
                                        optional: true,
                                        description:
                                            "max servers in response list",
                                    },
                                    {
                                        name: "ip_override",
                                        type: "string",
                                        optional: true,
                                        description: "client IP address",
                                    },
                                    {
                                        name: "launcher_type",
                                        type: "int32",
                                        optional: true,
                                        description: "launcher type",
                                    },
                                    {
                                        name: "ipv6_public",
                                        type: "string",
                                        optional: true,
                                        description:
                                            "client public ipv6 address if it knows it",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        name: "IGameNotificationsService",
                        methods: [
                            {
                                name: "UserCreateSession",
                                version: 1,
                                httpmethod: "POST",
                                description: "Creates an async game session",
                                parameters: [
                                    {
                                        name: "appid",
                                        type: "uint32",
                                        optional: false,
                                        description:
                                            "The appid to create the session for.",
                                    },
                                    {
                                        name: "context",
                                        type: "uint64",
                                        optional: false,
                                        description:
                                            "Game-specified context value the game can used to associate the session with some object on their backend.",
                                    },
                                    {
                                        name: "title",
                                        type: "{message}",
                                        optional: false,
                                        description:
                                            "The title of the session to be displayed within each user's list of sessions.",
                                    },
                                    {
                                        name: "users",
                                        type: "{message}",
                                        optional: false,
                                        description:
                                            "The initial state of all users in the session.",
                                    },
                                    {
                                        name: "steamid",
                                        type: "uint64",
                                        optional: false,
                                        description:
                                            "(Optional) steamid to make the request on behalf of -- if specified, the user must be in the session and all users being added to the session must be friends with the user.",
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
