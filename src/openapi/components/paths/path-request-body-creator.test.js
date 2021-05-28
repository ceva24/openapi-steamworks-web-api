import { SPEC_PATHS_REQUEST_BODY_CONTENT_TYPE } from "../../../constants/constants.js";
import { createRequestBody } from "./path-request-body-creator.js";

describe("path request body creator", () => {
    it("does not create a request body for get requests", () => {
        const httpMethod = "get";
        const parameters = [
            {
                name: "leaderboardName",
                type: "string",
                optional: false,
                description: "The leaderboard name to fetch data for.",
            },
        ];

        const requestBody = createRequestBody(httpMethod, parameters);

        expect(requestBody).toBeNull();
    });

    it("sets the content key", () => {
        const httpMethod = "post";
        const parameters = [
            {
                name: "collectioncount",
                type: "uint32",
                optional: false,
                description: "Number of collections being requested",
            },
        ];

        const requestBody = createRequestBody(httpMethod, parameters);

        expect(Object.keys(requestBody.content)).toHaveLength(1);
        expect(Object.keys(requestBody.content)[0]).toEqual(
            SPEC_PATHS_REQUEST_BODY_CONTENT_TYPE
        );
    });

    it("sets the schema type", () => {
        const httpMethod = "post";
        const parameters = [
            {
                name: "collectioncount",
                type: "uint32",
                optional: false,
                description: "Number of collections being requested",
            },
        ];

        const requestBody = createRequestBody(httpMethod, parameters);
        const mediaType =
            requestBody.content[Object.keys(requestBody.content)[0]];

        expect(mediaType.schema.type).toEqual("object");
    });
});
