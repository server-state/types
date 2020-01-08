/**
 * Common types for the different repositories of @server-state.
 * @see https://github.com/server-state
 *
 * @author Pablo Klaschka, Server State
 * @copyright 2020 by Server State
 * @version 1.0.0
 */
import './server-base';

declare global {
    /**
     * A JSON-serializable type that can get sent back as JSON via HTTP/-S
     */
    type JSONSerializable =
        number
        | string
        | boolean
        | { [key: string]: JSONSerializable }
        | JSONSerializable[];

    /**
     * A server module function.
     * @see https://server-state.github.io/specs/#/terminology/server-module-function
     */
    type SMF = (
        args: any
    ) => JSONSerializable | Promise<JSONSerializable>
}
