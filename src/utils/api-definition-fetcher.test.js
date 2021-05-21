import { fetchApiDefinition, STEAM_API_URL } from "./api-definition-fetcher.js";

beforeEach(() => {
  fetch.mockResponse(JSON.stringify({}));
});

describe("api definition fetcher", () => {
  it("calls the Steam Web API", async () => {
    await fetchApiDefinition();

    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toEqual(STEAM_API_URL);
  });
});
