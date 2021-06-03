import {
    SPEC_VERSION,
    SPEC_EXTERNAL_DOCS_URL,
    SPEC_INFO_TITLE,
    SPEC_SERVER_URL,
    SPEC_SECURITY_SCHEME_NAME,
    SPEC_SECURITY_SCHEME_TYPE,
    SPEC_PATHS_PARAMETERS_IN,
    SPEC_PARTNER_SERVER_URL,
    SPEC_EXTERNAL_DOCS_DESCRIPTION,
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

        expect(openApiSpec.servers.length).toEqual(2);
        expect(openApiSpec.servers[0].url).toEqual(SPEC_SERVER_URL);
        expect(openApiSpec.servers[1].url).toEqual(SPEC_PARTNER_SERVER_URL);
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
        expect(openApiSpec.externalDocs.description).toEqual(
            SPEC_EXTERNAL_DOCS_DESCRIPTION
        );
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

    it("defines a security scheme", async () => {
        const apiDefinition = { apilist: { interfaces: [] } };

        const openApiSpec = await createOpenApiSpec(apiDefinition);

        expect(
            openApiSpec.components.securitySchemes[SPEC_SECURITY_SCHEME_NAME]
                .type
        ).toEqual(SPEC_SECURITY_SCHEME_TYPE);

        expect(
            openApiSpec.components.securitySchemes[SPEC_SECURITY_SCHEME_NAME]
                .name
        ).toEqual(SPEC_SECURITY_SCHEME_NAME);

        expect(
            openApiSpec.components.securitySchemes[SPEC_SECURITY_SCHEME_NAME].in
        ).toEqual(SPEC_PATHS_PARAMETERS_IN);
    });

    it("sets the security scheme", async () => {
        const apiDefinition = { apilist: { interfaces: [] } };

        const openApiSpec = await createOpenApiSpec(apiDefinition);

        expect(openApiSpec.security).toHaveLength(1);

        const securitySchemeName = Object.keys(openApiSpec.security[0])[0];

        expect(securitySchemeName).toEqual(SPEC_SECURITY_SCHEME_NAME);

        expect(openApiSpec.security[0][securitySchemeName]).toHaveLength(0);
    });

    it("sorts tags", async () => {
        const apiDefinition = {
            apilist: {
                interfaces: [
                    {
                        name: "IDOTA2Match",
                        methods: [
                            {
                                name: "GetLeagueListing",
                                version: 1,
                                httpmethod: "GET",
                                parameters: [],
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
                                parameters: [],
                            },
                        ],
                    },
                ],
            },
        };

        const openApiSpec = await createOpenApiSpec(apiDefinition);

        expect(openApiSpec.tags).toHaveLength(2);
        expect(openApiSpec.tags[0].name).toEqual(
            "IContentServerDirectoryService"
        );
        expect(openApiSpec.tags[1].name).toEqual("IDOTA2Match");
    });

    it("creates unique tags", async () => {
        const apiDefinition = {
            apilist: {
                interfaces: [
                    {
                        name: "IDOTA2Match",
                        methods: [
                            {
                                name: "GetLiveLeagueGames",
                                version: 1,
                                httpmethod: "GET",
                                parameters: [],
                            },
                        ],
                    },
                    {
                        name: "IDOTA2Match",
                        methods: [
                            {
                                name: "GetLeagueListing",
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

        expect(openApiSpec.tags).toHaveLength(1);
    });

    it("sorts the paths by name", async () => {
        const apiDefinition = {
            apilist: {
                interfaces: [
                    {
                        name: "IDOTA2Match",
                        methods: [
                            {
                                name: "GetLiveLeagueGames",
                                version: 1,
                                httpmethod: "GET",
                                parameters: [],
                            },
                        ],
                    },
                    {
                        name: "IDOTA2Match",
                        methods: [
                            {
                                name: "GetLeagueListing",
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

        expect(Object.keys(openApiSpec.paths)).toHaveLength(2);
        expect(Object.keys(openApiSpec.paths)[0]).toContain("GetLeagueListing");
        expect(Object.keys(openApiSpec.paths)[1]).toContain(
            "GetLiveLeagueGames"
        );
    });
});
