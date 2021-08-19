import { JsonSerializable } from './json-serializable';

/**
 * The base configuration.
 */
export type BaseConfig = Record<string, JsonSerializable>;

/**
 * The returned extension object.
 */
export interface ExtensionObject {
	name: string;
	onRemove: () => Promise<boolean>;
	schema: any;
	resolvers: any;
}

/**
 * An Server State extension function.
 */
export type Extension<T extends BaseConfig> = (
	config: T,
	api: any
) => ExtensionObject;
