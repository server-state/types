import { Observable } from 'rxjs';
import { JsonSerializable } from '../types';

namespace AnotherPlace {
	//
	// general types
	//
	let jsonSerializable: ServerStateTypes.JsonSerializable;
}

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
	// Necessary because of "TS-incompatible" types
	// TODO: Research if there's any nicer way of doing this
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	subscribe: (channel, ...otherChannels) => {
		if (otherChannels.length === 0)
			return Promise.resolve(new Observable<JsonSerializable>());
		return Promise.resolve(new Observable<[JsonSerializable, string]>());
	},
	request: (channel, args) => Promise.resolve({ abc: 'abc' })
};

api
	.subscribe('abc')
	.then(value =>
		value.subscribe({ next: json => `${json} is JsonSerializable` })
	);

api.subscribe('channel1', 'channel2').then(value =>
	value.subscribe({
		next: ([message, channel]) => `${message} on ${channel} is JsonSerializable`
	})
);

const data: JsonSerializable = JSON.parse('"abc"');

api
	.handle('REQUEST', async (arg1, arg2) => {
		return Promise.resolve(`${arg1};${arg2}`);
	})
	.then(() => {
		// handler is now registered
		api.request('REQUEST', 'a', 'b').then(res => {
			if (res !== 'a;b') throw new Error('Wrong');
		});
	});
