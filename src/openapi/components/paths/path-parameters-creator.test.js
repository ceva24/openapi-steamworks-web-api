import {
    SPEC_FORMATS,
    SPEC_PATHS_PARAMETERS_IN,
    SPEC_TYPES,
} from "../../../constants/constants.js";
import { createPathParameters } from "./path-parameters-creator.js";

describe("path parameters creator", () => {
    it("sets a path parameter name", () => {
        const parameters = [
            {
                name: "leaderboardName",
                type: "string",
                optional: false,
                description: "The leaderboard name to fetch data for.",
            },
        ];

        const pathParameters = createPathParameters(parameters);

        expect(pathParameters.length).toEqual(1);
        expect(pathParameters[0].name).toEqual("leaderboardName");
    });

    it("sets a path parameter in", () => {
        const parameters = [
            {
                name: "leaderboardName",
                type: "string",
                optional: false,
                description: "The leaderboard name to fetch data for.",
            },
        ];

        const pathParameters = createPathParameters(parameters);

        expect(pathParameters.length).toEqual(1);
        expect(pathParameters[0].in).toEqual(SPEC_PATHS_PARAMETERS_IN);
    });

    it("sets a path parameter description", () => {
        const parameters = [
            {
                name: "leaderboardName",
                type: "string",
                optional: false,
                description: "The leaderboard name to fetch data for.",
            },
        ];

        const pathParameters = createPathParameters(parameters);

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
            const parameters = [
                {
                    name: "leaderboardName",
                    type: "string",
                    optional,
                    description: "The leaderboard name to fetch data for.",
                },
            ];

            const pathParameters = createPathParameters(parameters);

            expect(pathParameters.length).toEqual(1);
            expect(pathParameters[0].required).toEqual(required);
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
            const parameters = [
                {
                    name: "leaderboardName",
                    type: steamType,
                    optional: false,
                    description: "The leaderboard name to fetch data for.",
                },
            ];

            const pathParameters = createPathParameters(parameters);

            expect(pathParameters.length).toEqual(1);
            expect(pathParameters[0].schema.type).toEqual(openApiSpecType);
            expect(pathParameters[0].schema.format).toEqual(openApiSpecFormat);
        }
    );

    it("sets a path parameter schema type to string when the Steam type is string", () => {
        const parameters = [
            {
                name: "leaderboardName",
                type: "string",
                optional: false,
                description: "The leaderboard name to fetch data for.",
            },
        ];

        const pathParameters = createPathParameters(parameters);

        expect(pathParameters.length).toEqual(1);
        expect(pathParameters[0].schema.type).toEqual(SPEC_TYPES.STRING);
    });

    it("sets multiple path parameters", () => {
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

        const pathParameters = createPathParameters(parameters);

        expect(pathParameters.length).toEqual(4);
    });
});
