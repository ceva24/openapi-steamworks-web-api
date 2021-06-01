import {
    SPEC_FORMATS,
    SPEC_TYPES,
    STEAM_PARAMETER_TYPES,
} from "../../constants/constants.js";
import { createPropertySchema } from "./property-schema-creator.js";

describe("property schema creator", () => {
    test.each`
        steamType                          | openApiSpecType       | openApiSpecFormat
        ${STEAM_PARAMETER_TYPES.UINT32}    | ${SPEC_TYPES.INTEGER} | ${SPEC_FORMATS.INT32}
        ${STEAM_PARAMETER_TYPES.INT32}     | ${SPEC_TYPES.INTEGER} | ${SPEC_FORMATS.INT32}
        ${STEAM_PARAMETER_TYPES.UINT64}    | ${SPEC_TYPES.INTEGER} | ${SPEC_FORMATS.INT64}
        ${STEAM_PARAMETER_TYPES.RAWBINARY} | ${SPEC_TYPES.STRING}  | ${SPEC_FORMATS.BINARY}
        ${STEAM_PARAMETER_TYPES.MESSAGE}   | ${SPEC_TYPES.STRING}  | ${SPEC_FORMATS.MESSAGE}
    `(
        "sets the property schema type to $openApiSpecType and format to $openApiSpecFormat when the Steam type is $steamType",
        ({ steamType, openApiSpecType, openApiSpecFormat }) => {
            const propertySchema = createPropertySchema(steamType, null);

            expect(propertySchema.type).toEqual(openApiSpecType);
            expect(propertySchema.format).toEqual(openApiSpecFormat);
        }
    );

    test.each`
        steamType                       | openApiSpecType
        ${STEAM_PARAMETER_TYPES.STRING} | ${SPEC_TYPES.STRING}
        ${STEAM_PARAMETER_TYPES.BOOL}   | ${SPEC_TYPES.BOOLEAN}
    `(
        "sets the property schema type to $openApiSpecType when the Steam type is $steamType",
        ({ steamType, openApiSpecType }) => {
            const propertySchema = createPropertySchema(steamType, null);

            expect(propertySchema.type).toEqual(openApiSpecType);
            expect(propertySchema).not.toHaveProperty("format");
        }
    );

    it("sets the property schema type to string when the Steam type is string", () => {
        const propertySchema = createPropertySchema(
            STEAM_PARAMETER_TYPES.STRING,
            null
        );

        expect(propertySchema.type).toEqual(SPEC_TYPES.STRING);
        expect(propertySchema).not.toHaveProperty("format");
    });

    it("sets the property schema description when a description is passed", () => {
        const propertySchema = createPropertySchema(
            STEAM_PARAMETER_TYPES.STRING,
            "The appid to create the session for."
        );

        expect(propertySchema.description).toEqual(
            "The appid to create the session for."
        );
    });

    it("omits the property schema description when a description is not passed", () => {
        const propertySchema = createPropertySchema(
            STEAM_PARAMETER_TYPES.STRING,
            null
        );

        expect(propertySchema).not.toHaveProperty("description");
    });

    it("throws an error for unknown Steam parameter types", () => {
        expect(() => createPropertySchema("unknown", null)).toThrow(
            "Unknown Steam parameter type 'unknown'"
        );
    });
});
