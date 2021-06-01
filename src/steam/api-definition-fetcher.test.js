import fetch from "node-fetch";
import {
    STEAM_API_KEY_PARAMETER,
    STEAM_API_LIST_URL,
} from "../constants/constants.js";
import { fetchApiDefinition } from "./api-definition-fetcher.js";

beforeEach(() => {
    fetch.resetMocks();
    fetch.mockResponse(JSON.stringify({}));
});

describe("api definition fetcher", () => {
    it("calls the Steam Web API", async () => {
        await fetchApiDefinition();

        expect(fetch.mock.calls.length).toEqual(1);
        expect(fetch.mock.calls[0][0]).toEqual(STEAM_API_LIST_URL);
    });

    it("calls the Steam Web API with an API key when passed", async () => {
        await fetchApiDefinition("123");

        expect(fetch.mock.calls.length).toEqual(1);
        expect(fetch.mock.calls[0][0]).toEqual(
            `${STEAM_API_LIST_URL}?${STEAM_API_KEY_PARAMETER}=123`
        );
    });
});
