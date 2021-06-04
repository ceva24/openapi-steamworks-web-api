const STEAM_API_URL = "https://api.steampowered.com";

export const STEAM_API_LIST_URL = `${STEAM_API_URL}/ISteamWebAPIUtil/GetSupportedAPIList/v1/`;
export const STEAM_API_KEY_PARAMETER = "key";

export const STEAM_EXTERNAL_DOCS_URL =
    "https://partner.steamgames.com/doc/webapi";

export const STEAM_PARAMETER_TYPES = {
    STRING: "string",
    UINT64: "uint64",
    UINT32: "uint32",
    INT32: "int32",
    RAWBINARY: "rawbinary",
    BOOL: "bool",
    MESSAGE: "{message}",
    ENUM: "{enum}",
};

export const SPEC_FORMATS = {
    INT32: "int32",
    INT64: "int64",
    BINARY: "binary",
    MESSAGE: "{message}",
    ENUM: "{enum}",
};

export const SPEC_TYPES = {
    INTEGER: "integer",
    STRING: "string",
    BOOLEAN: "boolean",
};

export const SPEC_VERSION = "3.0.3";

export const SPEC_INFO_TITLE = "Steamworks Web API";
export const SPEC_INFO_DESCRIPTION =
    'This is an OpenAPI specification for the Steamworks Web API. For more details on how to use this tool, check out the <a href="https://github.com/ceva24/openapi-steamworks-web-api/blob/main/README.md">README</a>.';
export const SPEC_INFO_TERMS_OF_SERVICE_URL =
    "https://steamcommunity.com/dev/apiterms";
export const SPEC_INFO_CONTACT_NAME = "Steam Support";
export const SPEC_INFO_CONTACT_URL = "https://help.steampowered.com/";

export const SPEC_PATHS_PARAMETERS_IN = "query";
export const SPEC_PATHS_PARAMETERS_INPUT_JSON = "input_json";
export const SPEC_PATHS_PARAMETERS_INPUT_JSON_GET_DESCRIPTION =
    'An alternative to the query string parameters; pass arguments as a URL-encoded JSON blob. The "key" and "format" fields should still be passed as separate parameters';

export const SPEC_PATHS_PARAMETERS_INPUT_JSON_POST_DESCRIPTION =
    'An alternative to the request body; pass arguments as a URL-encoded JSON blob. The "key" and "format" fields should still be passed as separate parameters';

export const SPEC_PATHS_REQUEST_BODY_CONTENT_TYPE =
    "application/x-www-form-urlencoded";

export const SPEC_PATHS_FIELD_REQUIRED_TEXT = "(Required)";
export const SPEC_PATHS_FIELD_OPTIONAL_TEXT = "(Optional)";
export const SPEC_PATHS_FIELD_ARRAY_PARAMETER_DESCRIPTION =
    "<br>Note: this is an <a href=https://partner.steamgames.com/doc/webapi_overview#2>array parameter</a>";

export const SPEC_SERVER_URL = STEAM_API_URL;
export const SPEC_PARTNER_SERVER_URL = "https://partner.steam-api.com";

export const SPEC_EXTERNAL_DOCS_URL = STEAM_EXTERNAL_DOCS_URL;
export const SPEC_EXTERNAL_DOCS_DESCRIPTION = "Steamworks Web API Reference";

export const SPEC_SECURITY_SCHEME_TYPE = "apiKey";
export const SPEC_SECURITY_SCHEME_NAME = "key";

export const DEFAULT_RESPONSES = {
    200: { description: "A successful request" },
    400: {
        description:
            "If the user fails to supply all required fields, or supplies invalid data",
    },
    403: {
        description:
            "If the user fails to supply a valid API key, or if the key does not allow access to this resource",
    },
};

export const FORMAT_PARAMETER = {
    name: "format",
    in: SPEC_PATHS_PARAMETERS_IN,
    description: "The format of the response. Defaults to json",
    required: false,
    schema: { type: SPEC_TYPES.STRING, enum: ["json", "xml", "vdf"] },
};
