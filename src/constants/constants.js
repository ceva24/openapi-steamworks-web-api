const STEAM_API_URL = "https://api.steampowered.com";

export const STEAM_API_LIST_URL = `${STEAM_API_URL}/ISteamWebAPIUtil/GetSupportedAPIList/v1/`;

export const STEAM_EXTERNAL_DOCS_URL =
    "https://partner.steamgames.com/doc/webapi";

export const STEAM_PARAMETER_TYPES = {
    STRING: "string",
    UINT64: "uint64",
    UINT32: "uint32",
    INT32: "int32",
    RAWBINARY: "rawbinary",
    MESSAGE: "{message}",
};

export const SPEC_FORMATS = {
    INT32: "int32",
    INT64: "int64",
    BINARY: "binary",
    MESSAGE: "{message}",
};

export const SPEC_TYPES = {
    INTEGER: "integer",
    STRING: "string",
};

export const SPEC_VERSION = "3.0.3";

export const SPEC_INFO_TITLE = "Steamworks Web API";

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

export const SPEC_EXTERNAL_DOCS_URL = STEAM_EXTERNAL_DOCS_URL;

export const DEFAULT_RESPONSES = { 200: { description: "successful" } };

export const FORMAT_PARAMETER = {
    name: "format",
    in: SPEC_PATHS_PARAMETERS_IN,
    description: "The format of the response. Defaults to json",
    required: false,
    schema: { type: SPEC_TYPES.STRING, enum: ["json", "xml", "vdf"] },
};
