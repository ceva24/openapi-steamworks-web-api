import { SPEC_INFO_TITLE } from "../../constants/constants.js";
import { createInfo } from "./info-creator.js";

describe("info creator", () => {
    it("sets the title", () => {
        const info = createInfo();

        expect(info.title).toEqual(SPEC_INFO_TITLE);
    });
});
