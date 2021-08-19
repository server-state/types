import * as j from './json-serializable';
import * as e from './extension';

declare global {
	namespace ServerStateTypes {
		export import JsonSerializable = j.JsonSerializable;
		export import Extension = e;
	}
}

export * from './json-serializable';
export * from './extension';
