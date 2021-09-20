# Server State TypeScript Definitions

npm: [`@server-state/types`](https://www.npmjs.com/package/@server-state/types)

[![GitHub](https://img.shields.io/github/license/server-state/types)](LICENSE)
[![Twitter Follow](https://img.shields.io/twitter/follow/server_state?style=social)](https://twitter.com/server_state)

Standard TypeScript definitions for use in Server State projects.

## Installation

First, add it as a development dependency to your project:

```shell
npm install --save-dev @server-state/types
```

After the installation, check out the provided types:

```ts
import { Extension } from '@server-state/types';

const myExtension: Extension<MyConfig> = (config, api) => {
	//...
	return {
		name: 'MyExtension'
	};
};
```

You can also, optionally, add the package to your `tsconfig.json`'s `compilerOptions.typeRoots` array to get access to the most common types via the global `ServerStateTypes` namespace:

```json
// tsconfig.json
{
	"compilerOptions": {
		"typeRoots": [
			"node_modules/@server-state/types",
			"node_modules/@types"
			// [...]
		]
		// [...]
	}
	// [...]
}
```

```ts
// some TypeScript source file

let a: ServerStateTypes.JsonSerializable;
```

Namespace access is handy when you write in JavaScript and don't want to use `import('@server-state/types')` everywhere in your JSDoc comments:

```js
// some JavaScript source file

/**
 * @type {ServerStateTypes.JsonSerializable}
 */
let a;

// instead of

/**
 * @type {import('@server-state/types').JsonSerializable}
 */
let b;
```

For all complete list of types, check out the reference:
[types.server-state.tech](https://types.server-state.tech/)

## Package structure

```
.
├── sample (samples for the types, useful for testing the types)
│   ├── sample.ts
│   ├── sample-js.js
│   └── tsconfig.json
├── src
│   ├── index.ts
│   └── [...]
├── types (built-in build script)
│   ├── index.d.ts
│   └── [...]
├── CHANGELOG.md (DO NOT TOUCH! auto-generated changelog for the package)
├── LICENSE
├── package.json
├── README.md (you're here :P)
└── [...] (configuration files)
```

## Contributing

Coming soon :wink:

## Contributors

Thank you to all contributors of this repository:

[![Contributors](https://contrib.rocks/image?repo=server-state/types)](https://github.com/server-state/types/graphs/contributors)

Made with [contributors-img](https://contrib.rocks).

## About

This repository is part of [Server State](https://www.server-state.tech/), a project by [fliegwerk](https://www.fliegwerk.com/).
