import { Observable } from 'rxjs';
import { JsonSerializable } from './json-serializable';

export type PubSubHandleFunction = (...args: JsonSerializable[]) => void | JsonSerializable | Promise<JsonSerializable | void>;

export interface ExtensionApi {
	/**
	 * Calls a subroutine defined by the given channel name and returns a promise that resolves with its return value.
	 *
	 * Handled by {@link handle}
	 * @param channel The channel name that defines the subroutine
	 * @param args The args that get passed to {@link handle}
	 * @returns {@link Promise} that resolves to the handler's `callback` return/resolve value
	 * 
	 * @see {@link handle}
	 */
	request(channel: string, ...args: JsonSerializable[]): Promise<JsonSerializable>;

	/**
	 * Handles a request triggered by {@link request}.
	 *
	 * Only awaits "active subscription", not execution!
	 * 
	 * @param channel The channel to listen to. The channel defines the event.
	 * @param callback The callback's return (/resolve) value gets passed back to {@link request}
	 * @returns {@link Promise} that resolves to {@link Observable} once the subscription is active
	 * 
	 * @see {@link request}
	 */
	handle(channel: string, callback: PubSubHandleFunction): Promise<void>

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
	): Observable<readonly [message: JsonSerializable, channel: string]>;

	/**
	 * Subscribes to channels on the event bus using patterns.
	 * @param patterns - the pattern(s) of channel(s) to subscribe to
	 * @returns {@link Promise} that resolves to {@link Observable} that emits `[message, channelName]` once the subscription is active
	 */
	pSubscribe(
		...patterns: string[]
	): Observable<readonly [message: JsonSerializable, channel: string]>;

	/**
	 * Publishes a message to a channel on the event bus.
	 * @param channel - the channel to publish to
	 * @param message - the message to publish
	 * @return {@link Promise} which resolves when the message was successfully published
	 */
	publish(channel: string, message: JsonSerializable): Observable<void>;
}
