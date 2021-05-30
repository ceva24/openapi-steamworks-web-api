import { SPEC_PATHS_PARAMETERS_IN } from "../../../constants/constants.js";
import { createPathParameters } from "./path-parameters-creator.js";

describe("path parameters creator", () => {
    it("sets a path parameter name", () => {
        const httpMethod = "get";
        const parameters = [
            {
                name: "leaderboardName",
                type: "string",
                optional: false,
                description: "The leaderboard name to fetch data for.",
            },
        ];

        const pathParameters = createPathParameters(httpMethod, parameters);

        expect(pathParameters.length).toEqual(1);
        expect(pathParameters[0].name).toEqual("leaderboardName");
    });

    it("sets a path parameter in", () => {
        const httpMethod = "get";
        const parameters = [
            {
                name: "leaderboardName",
                type: "string",
                optional: false,
                description: "The leaderboard name to fetch data for.",
            },
        ];

        const pathParameters = createPathParameters(httpMethod, parameters);

        expect(pathParameters.length).toEqual(1);
        expect(pathParameters[0].in).toEqual(SPEC_PATHS_PARAMETERS_IN);
    });

    it("sets a path parameter description", () => {
        const httpMethod = "get";
        const parameters = [
            {
                name: "leaderboardName",
                type: "string",
                optional: false,
                description: "The leaderboard name to fetch data for.",
            },
        ];

        const pathParameters = createPathParameters(httpMethod, parameters);

        expect(pathParameters.length).toEqual(1);
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
            const httpMethod = "get";
            const parameters = [
                {
                    name: "leaderboardName",
                    type: "string",
                    optional,
                    description: "The leaderboard name to fetch data for.",
                },
            ];

            const pathParameters = createPathParameters(httpMethod, parameters);

            expect(pathParameters.length).toEqual(1);
            expect(pathParameters[0].required).toEqual(required);
        }
    );

    it("sets the path parameter schema type", () => {
        const httpMethod = "get";
        const parameters = [
            {
                name: "leaderboardName",
                type: "string",
                optional: false,
                description: "The leaderboard name to fetch data for.",
            },
        ];

        const pathParameters = createPathParameters(httpMethod, parameters);

        expect(pathParameters[0].schema.type).toEqual("string");
    });

    it("sets multiple path parameters", () => {
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

        const pathParameters = createPathParameters(httpMethod, parameters);

        expect(pathParameters.length).toEqual(4);
    });

    it("does not create parameters for POST requests", () => {
        const httpMethod = "post";
        const parameters = [
            {
                name: "leaderboardName",
                type: "string",
                optional: false,
                description: "The leaderboard name to fetch data for.",
            },
        ];

        const pathParameters = createPathParameters(httpMethod, parameters);

        expect(pathParameters).toHaveLength(0);
    });

    it("sets an empty description field when the parameter has no description", () => {
        const httpMethod = "get";
        const parameters = [
            {
                name: "leaderboardName",
                type: "string",
                optional: false,
            },
        ];

        const pathParameters = createPathParameters(httpMethod, parameters);

        expect(pathParameters).toHaveLength(1);
        expect(pathParameters[0].description).toEqual("");
    });
});
