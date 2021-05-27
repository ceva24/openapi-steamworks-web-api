import {
    DEFAULT_RESPONSES,
    SPEC_FORMATS,
    SPEC_PATHS_PARAMETERS_IN,
    SPEC_TYPES,
    STEAM_PARAMETER_TYPES,
    STEAM_EXTERNAL_DOCS_URL,
} from "../../../constants/constants.js";
import { createPath } from "./path-creator.js";

describe("path creator", () => {
    it("sets the path key", () => {
        const interfaceName = "IClientStats_1046930";
        const method = {
            name: "ReportEvent",
            version: 1,
            httpmethod: "GET",
            parameters: [],
        };

        const path = createPath(interfaceName, method);

        expect(Object.keys(path).length).toEqual(1);
        expect(Object.keys(path)[0]).toEqual(
            "/IClientStats_1046930/ReportEvent/v1"
        );
    });

    it("sets the path method", () => {
        const interfaceName = "IClientStats_1046930";
        const method = {
            name: "ReportEvent",
            version: 1,
            httpmethod: "GET",
            parameters: [],
        };

        const path = createPath(interfaceName, method);
        const value = path[Object.keys(path)[0]];

        expect(Object.keys(value).length).toEqual(1);
        expect(Object.keys(value)[0]).toEqual("get");
    });

    it("sets the path method responses to the default responses", () => {
        const interfaceName = "IClientStats_1046930";
        const method = {
            name: "ReportEvent",
            version: 1,
            httpmethod: "GET",
            parameters: [],
        };

        const path = createPath(interfaceName, method);
        const operation = getOperation(path);

        expect(operation.responses).toEqual(DEFAULT_RESPONSES);
    });

    it("sets the path external docs", () => {
        const interfaceName = "IClientStats_1046930";
        const method = {
            name: "ReportEvent",
            version: 1,
            httpmethod: "GET",
            parameters: [],
        };

        const path = createPath(interfaceName, method);
        const operation = getOperation(path);

        expect(operation.externalDocs.url).toEqual(
            `${STEAM_EXTERNAL_DOCS_URL}/IClientStats_1046930#ReportEvent`
        );
    });

    it("sets a path parameter name", () => {
        const interfaceName = "IPortal2Leaderboards_620";
        const method = {
            name: "GetBucketizedData",
            version: 1,
            httpmethod: "GET",
            parameters: [
                {
                    name: "leaderboardName",
                    type: "string",
                    optional: false,
                    description: "The leaderboard name to fetch data for.",
                },
            ],
        };

        const path = createPath(interfaceName, method);
        const operation = getOperation(path);

        expect(operation.parameters.length).toEqual(1);
        expect(operation.parameters[0].name).toEqual("leaderboardName");
    });

    it("sets a path parameter in", () => {
        const interfaceName = "IPortal2Leaderboards_620";
        const method = {
            name: "GetBucketizedData",
            version: 1,
            httpmethod: "GET",
            parameters: [
                {
                    name: "leaderboardName",
                    type: "string",
                    optional: false,
                    description: "The leaderboard name to fetch data for.",
                },
            ],
        };

        const path = createPath(interfaceName, method);
        const operation = getOperation(path);

        expect(operation.parameters.length).toEqual(1);
        expect(operation.parameters[0].in).toEqual(SPEC_PATHS_PARAMETERS_IN);
    });

    it("sets a path parameter description", () => {
        const interfaceName = "IPortal2Leaderboards_620";
        const method = {
            name: "GetBucketizedData",
            version: 1,
            httpmethod: "GET",
            parameters: [
                {
                    name: "leaderboardName",
                    type: "string",
                    optional: false,
                    description: "The leaderboard name to fetch data for.",
                },
            ],
        };

        const path = createPath(interfaceName, method);
        const operation = getOperation(path);

        expect(operation.parameters.length).toEqual(1);
        expect(operation.parameters[0].description).toEqual(
            "The leaderboard name to fetch data for."
        );
    });

    test.each`
        optional | required
        ${true}  | ${false}
        ${false} | ${true}
    `(
        "sets a path parameter required to $required when optional is $optional",
        ({ optional, required }) => {
            const interfaceName = "IPortal2Leaderboards_620";
            const method = {
                name: "GetBucketizedData",
                version: 1,
                httpmethod: "GET",
                parameters: [
                    {
                        name: "leaderboardName",
                        type: "string",
                        optional,
                        description: "The leaderboard name to fetch data for.",
                    },
                ],
            };

            const path = createPath(interfaceName, method);
            const operation = getOperation(path);

            expect(operation.parameters.length).toEqual(1);
            expect(operation.parameters[0].required).toEqual(required);
        }
    );

    test.each`
        steamType      | openApiSpecType       | openApiSpecFormat
        ${"uint32"}    | ${SPEC_TYPES.INTEGER} | ${SPEC_FORMATS.INT32}
        ${"int32"}     | ${SPEC_TYPES.INTEGER} | ${SPEC_FORMATS.INT32}
        ${"uint64"}    | ${SPEC_TYPES.INTEGER} | ${SPEC_FORMATS.INT64}
        ${"rawbinary"} | ${SPEC_TYPES.STRING}  | ${SPEC_FORMATS.BINARY}
    `(
        "sets a path parameter schema type to $openApiSpecType and format to $openApiSpecFormat when the Steam type is $steamType",
        ({ steamType, openApiSpecType, openApiSpecFormat }) => {
            const interfaceName = "IPortal2Leaderboards_620";
            const method = {
                name: "GetBucketizedData",
                version: 1,
                httpmethod: "GET",
                parameters: [
                    {
                        name: "leaderboardName",
                        type: steamType,
                        optional: false,
                        description: "The leaderboard name to fetch data for.",
                    },
                ],
            };

            const path = createPath(interfaceName, method);
            const operation = getOperation(path);

            expect(operation.parameters.length).toEqual(1);
            expect(operation.parameters[0].schema.type).toEqual(
                openApiSpecType
            );
            expect(operation.parameters[0].schema.format).toEqual(
                openApiSpecFormat
            );
        }
    );

    it("sets a path parameter schema type to string when the Steam type is string", () => {
        const interfaceName = "IPortal2Leaderboards_620";
        const method = {
            name: "GetBucketizedData",
            version: 1,
            httpmethod: "GET",
            parameters: [
                {
                    name: "leaderboardName",
                    type: STEAM_PARAMETER_TYPES.STRING,
                    optional: false,
                    description: "The leaderboard name to fetch data for.",
                },
            ],
        };

        const path = createPath(interfaceName, method);
        const operation = getOperation(path);

        expect(operation.parameters.length).toEqual(1);
        expect(operation.parameters[0].schema.type).toEqual(SPEC_TYPES.STRING);
    });

    test.each`
        interfaceName                 | tag
        ${"ISteamApps"}               | ${"ISteamApps"}
        ${"IPortal2Leaderboards_620"} | ${"IPortal2Leaderboards"}
    `(
        "sets the path tag to $tag when the interface name is $interfaceName",
        ({ interfaceName, tag }) => {
            const method = {
                name: "GetAppList",
                version: 1,
                httpmethod: "GET",
                parameters: [],
            };

            const path = createPath(interfaceName, method);
            const operation = getOperation(path);

            expect(operation.tags.length).toEqual(1);
            expect(operation.tags[0]).toEqual(tag);
        }
    );
});

const getOperation = (path) => {
    const value = path[Object.keys(path)[0]];
    return value[Object.keys(value)[0]];
};
