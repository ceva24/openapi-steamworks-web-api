export const STEAM_API_URL =
    "https://api.steampowered.com/ISteamWebAPIUtil/GetSupportedAPIList/v1/";

export const STEAM_PARAMETER_TYPES = {
    STRING: "string",
    UINT64: "uint64",
    UINT32: "uint32",
    INT32: "int32",
    RAWBINARY: "rawbinary",
};

export const SPEC_FORMATS = {
    INT32: "int32",
    INT64: "int64",
    BINARY: "binary",
};

export const SPEC_TYPES = {
    INTEGER: "integer",
    STRING: "string",
};

export const SPEC_VERSION = "3.0.3";

export const SPEC_INFO_TITLE = "Steamworks Web API";

export const SPEC_PATHS_PARAMETERS_IN = "query";

export const DEFAULT_RESPONSES = { 200: { description: "successful" } };
