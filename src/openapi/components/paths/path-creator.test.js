import {
    DEFAULT_RESPONSES,
    STEAM_API_KEY_PARAMETER,
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

        expect(Object.keys(path)).toHaveLength(1);
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

        expect(Object.keys(value)).toHaveLength(1);
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

        const parameter = operation.parameters.find((parameter) => {
            return parameter.name === method.parameters[0].name;
        });

        expect(parameter).toBeDefined();
    });

    it("sets the path tag", () => {
        const interfaceName = "ISteamWebAPIUtil";
        const method = {
            name: "GetSupportedAPIList",
            version: 1,
            httpmethod: "GET",
            parameters: [],
        };

        const path = createPath(interfaceName, method);
        const operation = getOperation(path);

        expect(operation.tags).toHaveLength(1);
        expect(operation.tags[0]).toEqual(interfaceName);
    });

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

    it("does not create the key query parameter for get requests", () => {
        const interfaceName = "ISteamWebAPIUtil";
        const method = {
            name: "GetSupportedAPIList",
            version: 1,
            httpmethod: "GET",
            parameters: [
                {
                    name: "key",
                    type: "string",
                    optional: true,
                    description: "access key",
                },
            ],
        };

        const path = createPath(interfaceName, method);
        const operation = getOperation(path);

        const keyParameter = operation.parameters.find((parameter) => {
            return parameter.name === STEAM_API_KEY_PARAMETER;
        });

        expect(keyParameter).not.toBeDefined();
    });

    it("does not create the key property for request bodies", () => {
        const interfaceName = "ISteamCDN";
        const method = {
            name: "SetClientFilters",
            version: 1,
            httpmethod: "POST",
            parameters: [
                {
                    name: "key",
                    type: "string",
                    optional: false,
                    description: "access key",
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
