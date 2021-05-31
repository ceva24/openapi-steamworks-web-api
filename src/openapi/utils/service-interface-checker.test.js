import { isServiceInterface } from "./service-interface-checker.js";

describe("service interface checker", () => {
    test.each`
        interfaceName            | result
        ${"ISteamRemoteStorage"} | ${false}
        ${"IBroadcastService"}   | ${true}
        ${"ibroadcastservice"}   | ${true}
        ${""}                    | ${false}
        ${null}                  | ${false}
    `(
        "checking whether $interfaceName is a service interface returns $result",
        ({ interfaceName, result }) => {
            expect(isServiceInterface(interfaceName)).toEqual(result);
        }
    );
});
