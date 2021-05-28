import { SPEC_FORMATS, SPEC_TYPES } from "../../constants/constants.js";
import { createPropertySchema } from "./property-schema-creator.js";

describe("property schema creator", () => {
    test.each`
        steamType      | openApiSpecType       | openApiSpecFormat
        ${"uint32"}    | ${SPEC_TYPES.INTEGER} | ${SPEC_FORMATS.INT32}
        ${"int32"}     | ${SPEC_TYPES.INTEGER} | ${SPEC_FORMATS.INT32}
        ${"uint64"}    | ${SPEC_TYPES.INTEGER} | ${SPEC_FORMATS.INT64}
        ${"rawbinary"} | ${SPEC_TYPES.STRING}  | ${SPEC_FORMATS.BINARY}
    `(
        "sets the property schema type to $openApiSpecType and format to $openApiSpecFormat when the Steam type is $steamType",
        ({ steamType, openApiSpecType, openApiSpecFormat }) => {
            const propertySchema = createPropertySchema(steamType);

            expect(propertySchema.type).toEqual(openApiSpecType);
            expect(propertySchema.format).toEqual(openApiSpecFormat);
        }
    );

    it("sets the property schema type to string when the Steam type is string", () => {
        const propertySchema = createPropertySchema("string");

        expect(propertySchema.type).toEqual("string");
        expect(propertySchema).not.toHaveProperty("format");
    });
});
