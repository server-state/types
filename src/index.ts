/**
 * Common types for the different repositories of @server-state.
 * @see https://github.com/server-state
 *
 * @author Pablo Klaschka, Server State
 * @copyright 2020 by Server State
 * @version 1.0.0
 */
declare namespace ServerState {
    /**
     * A JSON-serializable type that can get sent back as JSON via HTTP/-S
     */
    export type JSONSerializable =
        number
        | string
        | boolean
        | { [key: string]: JSONSerializable }
        | JSONSerializable[];

    /**
     * A server module function.
     * @see https://server-state.github.io/specs/#/terminology/server-module-function
     */
    export type SMF = (
        args: any
    ) => JSONSerializable | Promise<JSONSerializable>

    /**
     * Common type definitions for the server-base module
     * @see https://github.com/server-state/server-base
     */
    export namespace ServerBase {
        /**
         * The config that gets passed to the server-base constructor
         */
        interface Config {
            /**
             * If true, messages will get logged via stdout and stderr
             * @default true
             */
            logToConsole?: boolean;
            /**
             * If `true`, messages will get logged to the file specified as `logFilePath`.
             * @default false
             */
            logToFile?: boolean;
            /**
             * Path to the file in which messages should get logged (in case `logToFile` is `true`).
             * @default './server-state.log'
             */
            logFilePath?: string;
            /**
             * A callback that checks whether the current user (of the request) is authorized to access the resource
             * @param req The HTTP request to evaluate tokens or other forms of authentication
             * @param authorizedGroups The groups that have the authorization to access the resource
             * @return Is authorized? In other words: Is there an intersection between the groups the user belongs to and `authorizedGroups`?
             */
            isAuthorized?: (req: import('express').Request, authorizedGroups: string[]) => boolean;
        }
    }
}
