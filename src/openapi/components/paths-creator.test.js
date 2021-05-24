import { createPaths } from "./paths-creator.js";

describe("path creator", () => {
    it("creates a path for one interface with one method", () => {
        const apiDefinition = {
            apilist: {
                interfaces: [
                    {
                        name: "IClientStats_1046930",
                        methods: [
                            {
                                name: "ReportEvent",
                                version: 1,
                                httpmethod: "GET",
                            },
                        ],
                    },
                ],
            },
        };

        const paths = createPaths(apiDefinition);

        expect(Object.keys(paths).length).toEqual(1);
    });
});
