import { createInfo, API_TITLE } from "./info-creator.js";

describe("info creator", () => {
    it("sets the title", () => {
        const info = createInfo();

        expect(info.title).toEqual(API_TITLE);
    });
});
