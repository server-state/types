import * as j from './json-serializable';
import * as e from './extension';
import * as a from './extension-api';

declare global {
	namespace ServerStateTypes {
		export import JsonSerializable = j.JsonSerializable;
		export import Extension = e.Extension;
		export import ExtensionApi = a.ExtensionApi;
	}
}

export * from './json-serializable';
export * from './extension';
export * from './extension-api';
