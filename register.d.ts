// Type definitions for module-alias 2.0 (+ path-alias)
// Project: https://github.com/ilearnio/module-alias/
// Definitions by: Kevin Ramharak <https://github.com/KevinRamharak>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Modified for path-alias: https://github.com/EvanSmith-git/path-alias

export namespace pathAlias {
    function pathContainsAlias(path: string, alias: string): boolean;
    function isPathMatchesAlias(path: string, alias: string): boolean;

    /**
     * Register a custom modules directory
     */
    function addPath(path: string): void;

    /**
     * Register a single or multiple aliases
     */
    function addAlias(alias: string | { [alias: string]: string }, path: string | undefined): void;

    /**
     * Register mutliple aliases
     */
    function addAliases(aliases: { [alias: string]: string }): void;

    function resolve(path: string): string;

    /**
     * module intialis options type
     */
    interface Options {
        base: string;
    }
}