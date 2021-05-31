import { createPaths } from "./paths-creator.js";

describe("path creator", () => {
    it("creates a path for one interface with one method", () => {
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
                                parameters: [],
                            },
                        ],
                    },
                ],
            },
        };

        const paths = createPaths(apiDefinition);

        expect(Object.keys(paths)).toHaveLength(1);
    });

    it("creates a path for one interface with multiple methods", () => {
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
                ],
            },
        };

        const paths = createPaths(apiDefinition);

        expect(Object.keys(paths)).toHaveLength(2);
    });

    it("creates paths for multiple interfaces with one method each", () => {
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
                                parameters: [],
                            },
                        ],
                    },
                ],
            },
        };

        const paths = createPaths(apiDefinition);

        expect(Object.keys(paths)).toHaveLength(2);
    });

    it("creates paths for multiple interfaces with multiple methods each", () => {
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
                ],
            },
        };

        const paths = createPaths(apiDefinition);

        expect(Object.keys(paths)).toHaveLength(4);
    });
});
