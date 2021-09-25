import { TypeSource, IResolvers } from '@graphql-tools/utils';
import { JsonSerializable } from './json-serializable';
import { ExtensionApi } from './extension-api';

/**
 * The base configuration type that every extension configuration has to extend.
 */
export type BaseConfig = Record<string, JsonSerializable>;

/**
 * The object returned by an {@link Extension} function.
 */
export interface ExtensionObject {
	/**
	 * The extension's human-readable name. Should be unique (e.g., a package name)
	 */
	name: string;

	/**
	 * Function that gets called when the extension gets unloaded.
	 *
	 * Should clean up all remaining running code (e.g., subscriptions to the pub/sub bus)
	 *
	 * @returns {@link Promise} that resolves when cleanup is finished
	 */
	onRemove?(): Promise<void>;

	/**
	 * `typeDefs` for an optional GraphQL schema extension for the Server State schema.
	 *
	 * Also requires {@link ExtensionObject.resolvers}
	 */
	typeDefs?: TypeSource;

	/**
	 * Resolvers for the schema extensions defined in {@link ExtensionObject.schema}.
	 *
	 * Required if `schema` is set.
	 */
	resolvers?: IResolvers;
}

/**
 * A Server State extension function.
 */
export type Extension<T extends BaseConfig> = (
	config: T,
	api: ExtensionApi
) => ExtensionObject | Promise<ExtensionObject>;
