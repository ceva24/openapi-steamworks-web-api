import { createTag, createTagName } from "./tag-creator.js";

describe("tag creator", () => {
    it("creates a tag", () => {
        const text = "ISteamWebAPIUtil";

        const tag = createTag(text);

        expect(tag.name).toEqual(text);
    });

    it("ignores anything past an underscore for a tag name", () => {
        const text = "IPortal2Leaderboards_620";

        expect(createTagName(text)).toEqual("IPortal2Leaderboards");
    });
});
