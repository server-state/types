import { Observable } from 'rxjs';
import { JsonSerializable } from './json-serializable';

export interface ExtensionApi {
	/**
	 * Subscribes to a channel on the event bus.
	 * @param channel - the channel to subscribe to
	 * @returns an RXJS Observable
	 */
	subscribe(channel: string): Observable<JsonSerializable>;

	/**
	 * Subscribes to channels on the event bus.
	 * @param channels - the channels to subscribe to
	 * @returns an RXJS Observable which contains the message and the channel name
	 */
	subscribe(
		...channels: string[]
	): Observable<readonly [message: JsonSerializable, channel: string]>;

	/**
	 * Subscribes to channels on the event bus using patterns.
	 * @param patterns - the pattern(s) of channel(s) to subscribe to
	 * @returns an RXJS Observable which contains the message and the channel name
	 */
	pSubscribe(
		...patterns: string[]
	): Observable<readonly [message: JsonSerializable, channel: string]>;

	/**
	 * Publishes a message to a channel on the event bus.
	 * @param channel - the channel to publish to
	 * @param message - the message to publish
	 * @return an RXJS Observable which resolves when the message was successfully published
	 */
	publish(channel: string, message: JsonSerializable): Observable<void>;
}
