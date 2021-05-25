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
                            },
                        ],
                    },
                ],
            },
        };

        const paths = createPaths(apiDefinition);

        expect(Object.keys(paths).length).toEqual(1);
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
                            },
                            {
                                name: "GetServerVersion",
                                version: 1,
                                httpmethod: "GET",
                            },
                        ],
                    },
                ],
            },
        };

        const paths = createPaths(apiDefinition);

        expect(Object.keys(paths).length).toEqual(2);
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
                            },
                        ],
                    },
                ],
            },
        };

        const paths = createPaths(apiDefinition);

        expect(Object.keys(paths).length).toEqual(2);
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
                            },
                            {
                                name: "GetServerVersion",
                                version: 1,
                                httpmethod: "GET",
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
                            },
                            {
                                name: "GetServerVersion",
                                version: 1,
                                httpmethod: "GET",
                            },
                        ],
                    },
                ],
            },
        };

        const paths = createPaths(apiDefinition);

        expect(Object.keys(paths).length).toEqual(4);
    });
});
