import {
    SPEC_PATHS_FIELD_ARRAY_PARAMETER_DESCRIPTION,
    SPEC_PATHS_FIELD_OPTIONAL_TEXT,
    SPEC_PATHS_FIELD_REQUIRED_TEXT,
    STEAM_PARAMETER_TYPES,
} from "../../constants/constants.js";
import { createParameterDescription } from "./parameter-description-creator.js";

describe("parameter description creator", () => {
    it("returns the parameter description for non-service interfaces", () => {
        const interfaceName = "ISteamRemoteStorage";
        const parameter = {
            name: "collectioncount",
            type: "uint32",
            optional: false,
            description: "Number of collections being requested",
        };
        const description = createParameterDescription(
            interfaceName,
            parameter
        );

        expect(description).toEqual(parameter.description);
    });

    it("returns the description for an optional parameter in a service interface", () => {
        const interfaceName = "IContentServerDirectoryService";
        const parameter = {
            name: "max_servers",
            type: "uint32",
            optional: true,
            description: "max servers in response list",
        };
        const description = createParameterDescription(
            interfaceName,
            parameter
        );

        expect(description).toEqual(parameter.description);
    });

    it("returns the description prepended with the required text for a required parameter in a service interface", () => {
        const interfaceName = "IGameNotificationsService";
        const parameter = {
            name: "appid",
            type: "int32",
            optional: false,
            description: "The appid to create the session for.",
        };

        const description = createParameterDescription(
            interfaceName,
            parameter
        );

        expect(description).toEqual(
            `${SPEC_PATHS_FIELD_REQUIRED_TEXT} ${parameter.description}`
        );
    });

    it("returns the required text for a required parameter with no description in a service interface", () => {
        const interfaceName = "IGameNotificationsService";
        const parameter = {
            name: "appid",
            type: "int32",
            optional: false,
        };

        const description = createParameterDescription(
            interfaceName,
            parameter
        );

        expect(description).toEqual(SPEC_PATHS_FIELD_REQUIRED_TEXT);
    });

    it("returns the description for a required parameter in a service interface that has a description that describes it as optional", () => {
        const interfaceName = "IGameNotificationsService";
        const parameter = {
            name: "title",
            type: STEAM_PARAMETER_TYPES.MESSAGE,
            optional: false,
            description: `${SPEC_PATHS_FIELD_OPTIONAL_TEXT} The new title of the session.  If not specified, the title will not be changed.`,
        };

        const description = createParameterDescription(
            interfaceName,
            parameter
        );

        expect(description).toEqual(parameter.description);
    });

    it("includes the array parameter description for array parameters", () => {
        const interfaceName = "ISteamRemoteStorage";
        const parameter = {
            name: "publishedfileids[0]",
            type: "uint64",
            optional: false,
            description: "collection ids to get the details for",
        };

        const description = createParameterDescription(
            interfaceName,
            parameter
        );

        expect(description).toContain(
            SPEC_PATHS_FIELD_ARRAY_PARAMETER_DESCRIPTION
        );
    });
});
