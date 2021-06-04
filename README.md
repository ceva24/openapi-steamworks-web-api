# OpenAPI Specification for the Steamworks Web API

[![build](https://github.com/ceva24/openapi-steamworks-web-api/actions/workflows/build.yml/badge.svg)](https://github.com/ceva24/openapi-steamworks-web-api/actions/workflows/build.yml)
[![tests](https://github.com/ceva24/openapi-steamworks-web-api/actions/workflows/test.yml/badge.svg)](https://github.com/ceva24/openapi-steamworks-web-api/actions/workflows/test.yml)
[![code formatting](https://github.com/ceva24/openapi-steamworks-web-api/actions/workflows/check-format.yml/badge.svg)](https://github.com/ceva24/openapi-steamworks-web-api/actions/workflows/check-format.yml)
[![linting](https://github.com/ceva24/openapi-steamworks-web-api/actions/workflows/lint.yml/badge.svg)](https://github.com/ceva24/openapi-steamworks-web-api/actions/workflows/lint.yml)
[![Coverage Status](https://coveralls.io/repos/github/ceva24/openapi-steamworks-web-api/badge.svg?branch=main)](https://coveralls.io/github/ceva24/openapi-steamworks-web-api?branch=main)

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![GitHub](https://img.shields.io/github/license/ceva24/openapi-steamworks-web-api?color=blue)](https://github.com/ceva24/openapi-steamworks-web-api/blob/update-status-badges/LICENSE)

## 👋 Introduction

This is an automatically generated OpenAPI specification for the Steamworks Web API. It allows you to [explore the endpoints through the Swagger UI](https://ceva24.github.io/openapi-steamworks-web-api/) and try out some of the requests, and is intended to complement the official [Steamworks Web API Reference](https://partner.steamgames.com/doc/webapi) and [developer wiki](https://developer.valvesoftware.com/wiki/Steam_Web_API).

The specification is regenerated regularly so should be an accurate reflection of the current state of the API.

## 🔧 Prerequisites

Many of the endpoints require you to pass an API key as part of the request. You can [request one for your Steam account](https://steamcommunity.com/dev/apikey).

## 🗒️ How to use

You can freely [browse all of the available endpoints](https://ceva24.github.io/openapi-steamworks-web-api/). You can try them out by filling in any required fields and executing the request, which will show the resulting URL of the request and a curl implementation.

**Important note**: Requests sent through the UI will always fail due to CORS errors. You can copy the URL or curl command to run these locally without issue.

## ❗ Caveats

-   This project relies on an endpoint provided by Valve Software to generate the specification - not all API endpoints are documented in this (including many of those for `https://partner.steam-api.com`), though most of the core ones are available. If in doubt refer to the [Steamworks Web API Reference](https://partner.steamgames.com/doc/webapi).
-   Conversely this specification includes a number of endpoints that aren't included in the [Steamworks Web API Reference](https://partner.steamgames.com/doc/webapi) for whatever reason.
-   This is an opinionated specification - the API allows you to do things like pass the `key` parameter as a query string parameter or in some cases as a form field. In our case we always pass it as a query string parameter.
-   For simplicity all endpoints have been marked as requiring authentication, but some of the endpoints are public. You can determine this by consulting the relevant page in the [Steamworks Web API Reference](https://partner.steamgames.com/doc/webapi) - or just try it!
-   Most endpoints target the `https://api.steampowered.com` domain, but some are for `https://partner.steam-api.com`. You can select the server at the top of the specification, but you'll need to refer to the [Steamworks Web API Reference](https://partner.steamgames.com/doc/webapi) to find out which domain you need to target.
-   Many endpoints allow you to pass an [`input_json` parameter](https://partner.steamgames.com/doc/webapi_overview#3) - you'll need to [URL-encode this yourself](https://www.urlencoder.io/).
-   Be aware that some endpoints will respond with `HTTP 200` whilst containing an error message in the response body 🤷

## ☕ Disclaimer and thanks

This project is not affiliated with Valve Software or the Steam platform in any way. All of the information provided is publicly available through Valve Software's own documentation and APIs.

Found this project useful? Feel free to let me know by buying me a coffee!

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/R6R04T82W)
