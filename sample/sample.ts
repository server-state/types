import { Observable } from 'rxjs';
import { JsonSerializable } from '../types';

namespace AnotherPlace {
	//
	// general types
	//
	let jsonSerializable: ServerStateTypes.JsonSerializable;
}

const data: JsonSerializable = JSON.parse('"abc"');

const api: ServerStateTypes.ExtensionApi = {
	handle: (channel, callback) => {
		return Promise.resolve();
	},
	pSubscribe: patterns => {
		return Promise.resolve(new Observable());
	},
	publish: (channel, message) => {
		return Promise.resolve();
	},
	subscribe(channel, ...otherChannels): Promise<Observable<any>> {
		if (otherChannels.length === 0)
			return Promise.resolve(new Observable<JsonSerializable>());
		return Promise.resolve(new Observable<[JsonSerializable, string]>());
	},
	request: (channel, args) => Promise.resolve({ abc: 'abc' })
};

void api.subscribe('abc').then(value =>
	value.subscribe({
		next: json => `${JSON.stringify(json)} is JsonSerializable`
	})
);

void api.subscribe('channel1', 'channel2').then(value =>
	value.subscribe({
		next: ([message, channel]) =>
			`${JSON.stringify(message)} on ${channel} is JsonSerializable`
	})
);

void api
	.handle('REQUEST', async (arg1, arg2) => {
		return Promise.resolve(
			`${(arg1 ?? 'null').toString()};${(arg2 ?? 'null').toString()}`
		);
	})
	.then(() => {
		// handler is now registered
		void api.request('REQUEST', 'a', 'b').then(res => {
			if (res !== 'a;b') throw new Error('Wrong');
		});
	});
