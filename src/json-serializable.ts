/**
 * Type that only allows JSON serializable data, i.e., where the following holds true:
 *
 * ```ts
 * const orig: JsonSerializable = // [...]
 *
 * const new: JsonSerializable = JSON.parse(JSON.stringify(orig));
 *
 * // orig and new have the exact same values
 * ```
 *
 * @see {@link JSON.parse}
 * @see {@link JSON.stringify}
 */
export type JsonSerializable =
	| null
	| number
	| string
	| boolean
	| { [key: string]: JsonSerializable | undefined }
	| Array<JsonSerializable>;
