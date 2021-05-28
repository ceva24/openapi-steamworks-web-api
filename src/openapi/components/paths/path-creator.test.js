import {
    DEFAULT_RESPONSES,
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

    it("sets the path parameters", () => {
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

    it("sets the request body if not null", () => {
        const interfaceName = "IPortal2Leaderboards_620";
        const method = {
            name: "GetCollectionDetails",
            version: 1,
            httpmethod: "POST",
            parameters: [
                {
                    name: "collectioncount",
                    type: "uint32",
                    optional: false,
                    description: "Number of collections being requested",
                },
            ],
        };

        const path = createPath(interfaceName, method);
        const operation = getOperation(path);

        expect(operation).toHaveProperty("requestBody");
    });

    it("does not set the request body if null", () => {
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

        expect(operation).not.toHaveProperty("requestBody");
    });
});

const getOperation = (path) => {
    const value = path[Object.keys(path)[0]];
    return value[Object.keys(value)[0]];
};
