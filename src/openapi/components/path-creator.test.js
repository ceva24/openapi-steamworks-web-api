import { DEFAULT_RESPONSES } from "../../constants/constants.js";
import { createPath } from "./path-creator.js";

describe("path creator", () => {
    it("sets the path key", () => {
        const interfaceName = "IClientStats_1046930";
        const method = {
            name: "ReportEvent",
            version: 1,
            httpmethod: "GET",
        };

        const path = createPath(interfaceName, method);

        expect(Object.keys(path).length).toEqual(1);
        expect(Object.keys(path)[0]).toEqual(
            "/IClientStats_1046930/ReportEvent/v1"
        );
    });

    it("sets the path method", () => {
        const interfaceName = "IClientStats_1046930";
        const method = {
            name: "ReportEvent",
            version: 1,
            httpmethod: "GET",
        };

        const path = createPath(interfaceName, method);

        const value = path[Object.keys(path)[0]];

        expect(Object.keys(value).length).toEqual(1);
        expect(Object.keys(value)[0]).toEqual("get");
    });

    it("sets the path method responses to the default responses", () => {
        const interfaceName = "IClientStats_1046930";
        const method = {
            name: "ReportEvent",
            version: 1,
            httpmethod: "GET",
        };

        const path = createPath(interfaceName, method);

        const value = path[Object.keys(path)[0]];

        expect(value[Object.keys(value)[0]].responses).toEqual(
            DEFAULT_RESPONSES
        );
    });
});
