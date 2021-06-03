import {
    SPEC_INFO_DESCRIPTION,
    SPEC_INFO_TITLE,
} from "../../../constants/constants.js";
import { createInfo } from "./info-creator.js";

describe("info creator", () => {
    it("sets the title", () => {
        const info = createInfo();

        expect(info.title).toEqual(SPEC_INFO_TITLE);
    });

    it("sets the version", () => {
        const info = createInfo();

        expect(info.version).toEqual(process.env.npm_package_version);
    });

    it("sets the description", async () => {
        const info = createInfo();

        expect(info.description).toEqual(SPEC_INFO_DESCRIPTION);
    });
});
