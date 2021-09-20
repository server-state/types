import { Observable } from 'rxjs';
import { JsonSerializable } from './json-serializable';

/**
 * A function that handles requests triggered by {@link ExtensionApi.request} in {@link ExtensionApi.handle}
 *
 * @param args - the additional arguments passed to {@link ExtensionApi.request}.
 * @returns Synchronously (or asynchronously, with a {@link Promise} that resolves to the value) a JsonSerializable that gets returned to the {@link ExtensionApi.request} call, or `void` ("returning" `undefined`)
 *
 * @example
 * ```ts
 * // let api: ExtensionApi;
 *
 * await api.handle('REQUEST_SOME_INFO', (arg1, arg2) => `${arg1};${arg2}`);
 *
 * // handler is now registered and can be used
 *
 * const info = await api.request('REQUEST_SOME_INFO', 'a', 2);
 *
 * console.log(info); // "a;2"
 * ```
 */
export type PubSubHandleFunction = (
	...args: JsonSerializable[]
) => void | JsonSerializable | Promise<JsonSerializable | void>;

/**
 * The APIs passed to an {@link Extension} as `api`
 */
export interface ExtensionApi {
	/**
	 * Calls a subroutine defined by the given channel name and returns a promise that resolves with its return value.
	 *
	 * Handled by {@link handle}
	 * @param channel - The channel name that defines the subroutine
	 * @param args - The args that get passed to {@link handle}
	 * @returns {@link Promise} that resolves to the handler's `callback` return/resolve value
	 *
	 * @example
	 * ```ts
	 * // let api: ExtensionApi;
	 *
	 * await api.handle('REQUEST_SOME_INFO', (arg1, arg2) => `${arg1};${arg2}`);
	 *
	 * // handler is now registered and can be used
	 *
	 * const info = await api.request('REQUEST_SOME_INFO', 'a', 2);
	 *
	 * console.log(info); // "a;2"
	 * ```
	 *
	 * @see {@link handle}
	 */
	request(
		channel: string,
		...args: JsonSerializable[]
	): Promise<JsonSerializable | void>;

	/**
	 * Handles a request triggered by {@link request}.
	 *
	 * Only awaits "active subscription", not execution!
	 *
	 * @param channel - The channel to listen to. The channel defines the event.
	 * @param callback - The callback's return (/resolve) value gets passed back to {@link request}
	 * @returns {@link Promise} that resolves to {@link Observable} once the subscription is active
	 *
	 * @example
	 * ```ts
	 * // let api: ExtensionApi;
	 *
	 * await api.handle('REQUEST_SOME_INFO', (arg1, arg2) => `${arg1};${arg2}`);
	 *
	 * // handler is now registered and can be used
	 *
	 * const info = await api.request('REQUEST_SOME_INFO', 'a', 2);
	 *
	 * console.log(info); // "a;2"
	 * ```
	 *
	 * @see {@link request}
	 */
	handle(channel: string, callback: PubSubHandleFunction): Promise<void>;

	/**
	 * Subscribes to a channel on the event bus.
	 *
	 * Only awaits "active subscription", not execution!
	 *
	 * @param channel - the channel to subscribe to
	 * @returns {@link Promise} that resolves to {@link Observable} once the subscription is active
	 */
	subscribe(channel: string): Promise<Observable<JsonSerializable>>;

	/**
	 * Subscribes to channels on the event bus.
	 *
	 * Only awaits "active subscription", not execution!
	 *
	 * @param channels - the channels to subscribe to
	 * @returns an RXJS Observable which contains the message and the channel name
	 * @returns {@link Promise} that resolves to {@link Observable} that emits `[message, channelName]` once the subscription is active
	 */
	subscribe(
		...channels: string[]
	): Promise<Observable<readonly [message: JsonSerializable, channel: string]>>;

	/**
	 * Subscribes to channels on the event bus using patterns.
	 * @param patterns - the pattern(s) of channel(s) to subscribe to
	 * @returns {@link Promise} that resolves to {@link Observable} that emits `[message, channelName]` once the subscription is active
	 */
	pSubscribe(
		...patterns: string[]
	): Promise<Observable<readonly [message: JsonSerializable, channel: string]>>;

	/**
	 * Publishes a message to a channel on the event bus.
	 * @param channel - the channel to publish to
	 * @param message - the message to publish
	 * @returns {@link Promise} which resolves when the message was successfully published
	 */
	publish(channel: string, message: JsonSerializable): Promise<void>;
}
