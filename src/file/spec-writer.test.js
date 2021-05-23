import { readFileSync } from "fs";
import { writeOpenApiSpec, getOutputFile, createJson } from "./spec-writer.js";

describe("spec writer", () => {
    it("write contents to a file", () => {
        const openApiSpec = {
            openapi: "1.0.0",
            info: { title: "Test", version: "1.0.0" },
            paths: {},
        };

        writeOpenApiSpec(openApiSpec);

        const result = readFileSync(getOutputFile(), { encoding: "utf8" });
        const expectedContent = createJson(openApiSpec);

        expect(result).toEqual(expectedContent);
    });
});
