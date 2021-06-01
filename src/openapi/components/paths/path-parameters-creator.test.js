import {
    SPEC_PATHS_PARAMETERS_IN,
    SPEC_PATHS_PARAMETERS_INPUT_JSON,
    SPEC_PATHS_PARAMETERS_INPUT_JSON_GET_DESCRIPTION,
    SPEC_PATHS_PARAMETERS_INPUT_JSON_POST_DESCRIPTION,
    SPEC_TYPES,
} from "../../../constants/constants.js";
import { createPathParameters } from "./path-parameters-creator.js";

describe("path parameters creator", () => {
    it("sets a path parameter name", () => {
        const interfaceName = "IPortal2Leaderboards_620";
        const httpMethod = "get";
        const parameters = [
            {
                name: "leaderboardName",
                type: "string",
                optional: false,
                description: "The leaderboard name to fetch data for.",
            },
        ];

        const pathParameters = createPathParameters(
            interfaceName,
            httpMethod,
            parameters
        );

        expect(pathParameters).toHaveLength(1);
        expect(pathParameters[0].name).toEqual("leaderboardName");
    });

    it("sets a path parameter in", () => {
        const interfaceName = "IPortal2Leaderboards_620";
        const httpMethod = "get";
        const parameters = [
            {
                name: "leaderboardName",
                type: "string",
                optional: false,
                description: "The leaderboard name to fetch data for.",
            },
        ];

        const pathParameters = createPathParameters(
            interfaceName,
            httpMethod,
            parameters
        );

        expect(pathParameters).toHaveLength(1);
        expect(pathParameters[0].in).toEqual(SPEC_PATHS_PARAMETERS_IN);
    });

    it("sets a path parameter description", () => {
        const interfaceName = "IPortal2Leaderboards_620";
        const httpMethod = "get";
        const parameters = [
            {
                name: "leaderboardName",
                type: "string",
                optional: false,
                description: "The leaderboard name to fetch data for.",
            },
        ];

        const pathParameters = createPathParameters(
            interfaceName,
            httpMethod,
            parameters
        );

        expect(pathParameters).toHaveLength(1);
        expect(pathParameters[0].description).toEqual(
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
            const httpMethod = "get";
            const parameters = [
                {
                    name: "leaderboardName",
                    type: "string",
                    optional,
                    description: "The leaderboard name to fetch data for.",
                },
            ];

            const pathParameters = createPathParameters(
                interfaceName,
                httpMethod,
                parameters
            );

            expect(pathParameters).toHaveLength(1);
            expect(pathParameters[0].required).toEqual(required);
        }
    );

    it("sets the path parameter schema type", () => {
        const interfaceName = "IPortal2Leaderboards_620";
        const httpMethod = "get";
        const parameters = [
            {
                name: "leaderboardName",
                type: "string",
                optional: false,
                description: "The leaderboard name to fetch data for.",
            },
        ];

        const pathParameters = createPathParameters(
            interfaceName,
            httpMethod,
            parameters
        );

        expect(pathParameters[0].schema.type).toEqual("string");
    });

    it("sets multiple path parameters", () => {
        const interfaceName = "ISteamBroadcast";
        const httpMethod = "get";
        const parameters = [
            {
                name: "steamid",
                type: "uint64",
                optional: false,
                description: "Steam ID of the broadcaster",
            },
            {
                name: "sessionid",
                type: "uint64",
                optional: false,
                description: "Broadcast Session ID",
            },
            {
                name: "token",
                type: "uint64",
                optional: false,
                description: "Viewer token",
            },
            {
                name: "stream",
                type: "int32",
                optional: true,
                description: "video stream representation watching",
            },
        ];

        const pathParameters = createPathParameters(
            interfaceName,
            httpMethod,
            parameters
        );

        expect(pathParameters).toHaveLength(4);
    });

    it("does not create parameters for POST requests", () => {
        const interfaceName = "ISteamRemoteStorage";
        const httpMethod = "post";
        const parameters = [
            {
                name: "collectioncount",
                type: "uint32",
                optional: false,
                description: "Number of collections being requested",
            },
        ];

        const pathParameters = createPathParameters(
            interfaceName,
            httpMethod,
            parameters
        );

        expect(pathParameters).toHaveLength(0);
    });

    it("sets an empty description field when the parameter has no description", () => {
        const interfaceName = "IPortal2Leaderboards_620";
        const httpMethod = "get";
        const parameters = [
            {
                name: "leaderboardName",
                type: "string",
                optional: false,
            },
        ];

        const pathParameters = createPathParameters(
            interfaceName,
            httpMethod,
            parameters
        );

        expect(pathParameters).toHaveLength(1);
        expect(pathParameters[0].description).toEqual("");
    });

    test.each`
        httpMethod | description
        ${"get"}   | ${SPEC_PATHS_PARAMETERS_INPUT_JSON_GET_DESCRIPTION}
        ${"post"}  | ${SPEC_PATHS_PARAMETERS_INPUT_JSON_POST_DESCRIPTION}
    `(
        "sets the input_json parameter for $method methods in service interfaces",
        ({ httpMethod, description }) => {
            const interfaceName = "IPublishedFileService";
            const parameters = [];

            const pathParameters = createPathParameters(
                interfaceName,
                httpMethod,
                parameters
            );

            expect(pathParameters).toHaveLength(1);
            expect(pathParameters[0].name).toEqual(
                SPEC_PATHS_PARAMETERS_INPUT_JSON
            );
            expect(pathParameters[0].in).toEqual(SPEC_PATHS_PARAMETERS_IN);
            expect(pathParameters[0].required).toEqual(false);
            expect(pathParameters[0].description).toEqual(description);
            expect(pathParameters[0].schema.type).toEqual(SPEC_TYPES.STRING);
        }
    );

    it("does not set the input_json parameter for non-service interfaces", () => {
        const interfaceName = "IPortal2Leaderboards_620";
        const httpMethod = "get";
        const parameters = [];

        const pathParameters = createPathParameters(
            interfaceName,
            httpMethod,
            parameters
        );

        expect(pathParameters).toHaveLength(0);
    });

    it("does not set parameters as required in service interfaces", () => {
        const interfaceName = "IContentServerDirectoryService";
        const httpMethod = "get";
        const parameters = [
            {
                name: "cellid",
                type: "uint32",
                optional: false,
                description: "Client's Steam cell ID",
            },
        ];

        const pathParameters = createPathParameters(
            interfaceName,
            httpMethod,
            parameters
        );

        const cellIdParameter = pathParameters.find((parameter) => {
            return parameter.name === "cellid";
        });

        expect(cellIdParameter.required).toEqual(false);
    });
});
