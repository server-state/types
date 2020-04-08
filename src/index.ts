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


    type SMFProps = {
      /**
       * Samples of possible return values of the SMF
       */
      sampleData?: JSONSerializable[];
    }

    type SMFFunction = (args: any) => JSONSerializable | Promise<JSONSerializable>;

    /**
     * A server module function.
     * @see https://server-state.github.io/specs/#/terminology/server-module-function
     */
    export type SMF = SMFProps & SMFFunction

    /**
     * Standard data formats
     * @see https://server-state.github.io/specs/#/arch/data-formats
     */
    export namespace DataFormats {
        /**
         * A datapoint with an X- and a Y-coordinate. Can have a color and possibly a label (`title`).
         *
         * Suggested visualizations: Point in a scatter plot, point on a map
         */
        type XYDataPoint = {
            /**
             * The X coordinate of the point
             */
            x: number,
            /**
             * The Y coordinate of the point
             */
            y: number,
            /**
             * A label of the point. Can, e.g., get shown on mouse hover above a datapoint in a visualization
             */
            title?: string,
            /**
             * The color of the point. This can either be a string containing the HEX value of a color or a number marking the index in an arbitrary color scheme.
             */
            color?: string | number
        }

        /**
         * We call numeric data containing 2D-points that can get plotted in a graph XYData. Below, you can find its specifications.
         */
        export type XYData = Array<XYDataPoint>;

        /**
         * Hierarchical weighted data describes a tree structure, where nodes contain n child nodes and where all nodes have the size of the sum of the sum of all child nodes, with leaf nodes having an explicit size.
         *
         * Suggested visualizations: Lists, tables, treemaps, sunburst charts
         */
        export type HierarchicalData = {
            /**
             * A label of the point. Can, e.g., get shown on mouse hover above a datapoint in a visualization
             */
            title?: string,
            /**
             * The color of the point. This can either be a string containing the HEX value of a color or a number marking the index in an arbitrary color scheme.
             */
            color?: string | number,
            /**
             * The node's child nodes
             */
            children?: Array<HierarchicalData>,
            /**
             * The leaf node's size. Can get used for leaf nodes, i.e., where `children.length === 0`.
             */
            size?: number
        }

        /**
         * Raw Markdown that gets generated in the SM and rendered in the client
         *
         * Suggested visualizations: Markdown renderer, Raw text renderer for environments with no Rich Text support
         */
        export type Markdown = string;

        /**
         * Raw text that gets generated in the SM and rendered in the client
         *
         * Suggested visualizations: Plain text output
         */
        export type Text = string;

        /**
         * Data that's "display-able" in a table format.
         *
         * Suggested visualizations: Table, Data Table, Selective charts (mapping numerical fields to x and y in line data)
         */
        export type TableData = {
            /**
             * an array of strings containing the fields (columns) each rows has
             */
            _fields: string[],
            /**
             * an array of objects that include `string | number | boolean` values for the keys defined in `_fields`
             */
            rows: Array<{
                [_field: string]: string | number | boolean
            }>
        }

        /**
         * A series of key-value-pair string | number | boolean values, where keys are unique strings
         *
         *  Please note that `true`/`false` should get mapped to _yes_/_no_ in visualizations.
         *
         * Suggested visualizations: Table, List
         */
        export type KeyValuePairData = { [key: string]: string | number | boolean };
    }

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
